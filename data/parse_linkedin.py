#!/usr/bin/env python3
import json, sys, subprocess, re

def fetch_linkedin(url, cookie):
    result = subprocess.run([
        'curl', '-s', url,
        '-H', 'csrf-token: ajax:0000000000000000000',
        '-H', f'cookie: li_at={cookie}; JSESSIONID="ajax:0000000000000000000"',
        '-H', 'x-restli-protocol-version: 2.0.0',
        '-H', 'x-li-lang: en_US'
    ], capture_output=True, text=True)
    return result.stdout

def extract_id_from_urn(urn):
    # urn:li:fsd_jobPosting:1234567 or urn:li:fsd_jobPostingCard:(1234567,JOB_DETAILS)
    m = re.search(r'(\d{7,})', urn)
    return m.group(1) if m else None

def parse_jobs(raw_json):
    try:
        data = json.loads(raw_json)
    except:
        return []

    jobs = []
    elements = data.get('elements', [])

    for el in elements:
        # Navigate the nested structure
        title = None
        company = None
        location = None
        job_id = None

        # Try direct fields
        title = el.get('jobPostingTitle')

        # Primary/secondary descriptions
        primary = el.get('primaryDescription', {})
        secondary = el.get('secondaryDescription', {})
        if primary:
            company = primary.get('text')
        if secondary:
            location = secondary.get('text')

        # Get URN for job ID
        urn = el.get('jobPostingUrn') or el.get('entityUrn', '')
        job_id = extract_id_from_urn(urn)

        # Try nested job card
        if not title:
            for key in el:
                if isinstance(el[key], dict):
                    sub = el[key]
                    if 'jobPostingTitle' in sub:
                        title = sub['jobPostingTitle']
                    if 'primaryDescription' in sub:
                        company = sub['primaryDescription'].get('text')
                    if 'secondaryDescription' in sub:
                        location = sub['secondaryDescription'].get('text')
                    if 'jobPostingUrn' in sub:
                        job_id = extract_id_from_urn(sub['jobPostingUrn'])

        if title and job_id:
            jobs.append({
                'title': title,
                'company': company or 'Unknown',
                'location': location or 'Switzerland',
                'job_id': job_id,
                'url': f'https://www.linkedin.com/jobs/view/{job_id}'
            })

    return jobs

COOKIE = 'AQEDARMq-UQCVQt0AAABnEIhwMoAAAGcZi5Eyk4Ad7yugyZH3mbilt1Aloj3DBmgGEQRpErrMLLJG2p7Hi6dpop74Q9ct2wMqlsLEx4xnO9JgeC9PvFomlwj0g4zEaboWWpjcszYUeFw-K3fo0hI_zf0'

searches = [
    ('Staff Engineer Switzerland', 'https://www.linkedin.com/voyager/api/voyagerJobsDashJobCards?decorationId=com.linkedin.voyager.dash.deco.jobs.search.JobSearchCardsCollection-227&count=25&q=jobSearch&query=(origin:JOB_SEARCH_PAGE_SEARCH_BUTTON,keywords:Staff%20Engineer,locationUnion:(geoId:106693272),spellCorrectionEnabled:true)&start=0'),
    ('Platform Engineer Switzerland', 'https://www.linkedin.com/voyager/api/voyagerJobsDashJobCards?decorationId=com.linkedin.voyager.dash.deco.jobs.search.JobSearchCardsCollection-227&count=25&q=jobSearch&query=(origin:JOB_SEARCH_PAGE_SEARCH_BUTTON,keywords:Platform%20Engineer,locationUnion:(geoId:106693272),spellCorrectionEnabled:true)&start=0'),
    ('VP Engineering Geneva', 'https://www.linkedin.com/voyager/api/voyagerJobsDashJobCards?decorationId=com.linkedin.voyager.dash.deco.jobs.search.JobSearchCardsCollection-227&count=25&q=jobSearch&query=(origin:JOB_SEARCH_PAGE_SEARCH_BUTTON,keywords:VP%20Engineering,locationUnion:(geoId:103883259),spellCorrectionEnabled:true)&start=0'),
    ('CTO startup Switzerland', 'https://www.linkedin.com/voyager/api/voyagerJobsDashJobCards?decorationId=com.linkedin.voyager.dash.deco.jobs.search.JobSearchCardsCollection-227&count=25&q=jobSearch&query=(origin:JOB_SEARCH_PAGE_SEARCH_BUTTON,keywords:CTO%20startup,locationUnion:(geoId:106693272),spellCorrectionEnabled:true)&start=0'),
    ('Principal Engineer TypeScript', 'https://www.linkedin.com/voyager/api/voyagerJobsDashJobCards?decorationId=com.linkedin.voyager.dash.deco.jobs.search.JobSearchCardsCollection-227&count=25&q=jobSearch&query=(origin:JOB_SEARCH_PAGE_SEARCH_BUTTON,keywords:Principal%20Engineer%20TypeScript,spellCorrectionEnabled:true)&start=0'),
]

all_jobs = []
seen_ids = set()

for name, url in searches:
    print(f'\n=== {name} ===', file=sys.stderr)
    raw = fetch_linkedin(url, COOKIE)
    jobs = parse_jobs(raw)
    print(f'  Found {len(jobs)} jobs', file=sys.stderr)
    for j in jobs:
        if j['job_id'] not in seen_ids:
            seen_ids.add(j['job_id'])
            all_jobs.append(j)
            print(f'  - {j["title"]} @ {j["company"]} ({j["location"]}) -> {j["url"]}')

print(f'\nTotal unique jobs: {len(all_jobs)}', file=sys.stderr)
