--- 
layout: chapter
title: "From Entrepreneurs to Civic Entrepreneurs"
chapter: 6
part: 2
author: 
  -
    name: Ryan Alfred
    job: Co-Founder
    employer: BrightScope
    photo_url: /images/authors/ryan.png
    twitter: ryanalfred
    about: "Co-founder and President at BrightScope. Open government advocate."
  -
    name: Mike Alfred
    job: Co-Founder
    employer: BrightScope
    photo_url: /images/authors/mikea.png
    twitter: mikealfred    
    about: "Co-founder and CEO of BrightScope. *Forbes* contributor."
   
permalink: "/part-2/from-entrepreneurs-to-civic-entrepreneurs/"
---

### Introduction

My brother Mike and I never set out to become “civic entrepreneurs.” We did not see ourselves as being a part of the “open government” community. We were simply trying to solve a real-world problem, and that problem required improving the interfaces to government data. In this way, I think our story is the story of many civic entrepreneurs.

In the fall of 2007, we were young (Mike was 26, and I was 24), ambitious, and looking for a way to make an impact. We had just started an investment advisory company called Alfred Capital Management. We were managing money for individuals and families in San Diego and working hard to build the company client by client.

A few months prior, our father, Mike Alfred Sr., had introduced us to one of his clients, Dan Weeks, who was an engineering manager at Hewlett-Packard (HP). He had hired our father for some legal advice related to his real estate properties. Dan presented a business plan to Mike and me that attempted to solve a problem that he and his HP colleagues were struggling: building sound investment portfolios within their HP 401(k) plans. It was clear that Dan was incredibly passionate about 401(k) investing. Mike and I liked his engineering background, but we did not think the idea was viable at first.

Through a series of brainstorming sessions over the following weeks and months—most involving a few whiskeys—the possibility of working with Dan to improve retirement plans took on a new life. These sessions turned out to be where BrightScope began to take shape. We felt we had what could be a big idea. By individually rating every company retirement plan in the US, we believed we would drive an overall improvement in the ability of Americans to retire. It was an ambitious goal, the impact of which would reach far beyond our current client base—and that appealed to us.

Defined contribution (DC) plans are a relatively new addition to the corporate retirement plan landscape, rising out of the Employee Retirement Income Security Act of 1974 (ERISA) as an elective retirement savings program for employees. Originally DC plans were thought of as supplemental to company-sponsored, defined benefit (DB) pension plans, but over time, the DC plan firmly supplanted the DB plan as the primary retirement savings vehicle for American workers. As a result, there has been a major shift in retirement responsibility from employer to employee. In a DB plan, the company makes the contributions and the investment decisions, but in a DC plan, these two responsibilities fall squarely on the shoulders of employees. Unfortunately, most employees lack the discipline to save enough for retirement and the skill to build a well-diversified portfolio.

As we researched these structural issues, we uncovered other problems with DC plans. We found voluminous literature on high retirement plan fees, articles about conflicts of interest between plan service providers and plan participants, and a general feeling that DC plans were not being operated in the best interest of participants. At that point, we knew the opportunity was not solely helping participants make smart decisions for themselves, but also in defining what makes a DC plan good or bad, so that we could inspire the companies who sponsor the plans to make them better. Our objective of helping millions more retire in dignity was really a big data problem, and the first step was tracking down the right data.

The search for data quickly led us to the Department of Labor (DOL). Every retirement plan in the country files a Form 5500 annually with the DOL. Think of the Form 5500 as a tax form listing the assets, contributions, fees, and other details of each employee benefit plan. Larger plans, those with more than a hundred participants, are also required to obtain an annual audit. The combination of Form 5500 and the audit reports represented a gold mine of information, but first, we would need access to the data, which would require interfacing with the federal government.

The data we were looking for was not available through the DOL website. A few data companies were selling the 5500 data, but they did not have the additional high-value data from the audit reports. The decision was made to visit the DOL’s public disclosure room to ask for the data in person. At that point, we did what any entrepreneur would do in our position: wrote a business plan, raised a little bit of money from friends and family, and booked a flight to Washington, DC.

As it turned out, this was the beginning of our path to civic entrepreneurship with BrightScope. Though we never intended to build a business around “open data” and “open government,” that was precisely what we were about to do.

### When “Public Disclosure” Is Not Enough

Showing up at the Department of Labor for the first time was definitely a culture shock. We had been to DC several times before, but mostly to visit the monuments as students. We had never been to DC “on business.”

I do not think you can overstate the difference between startup culture and federal government culture. Startups are all about speed—fast decisions and rapid development. In DC, you get a sense that everything happens slowly, and every decision is placed under the microscope. The professional staff at the DOL took their work very seriously, but they were held back by a lagging technology infrastructure and years of working through a slow bureaucracy to get work done.

We made our way through DOL security, and the staff directed us toward the public disclosure room. The public disclosure room itself is not much to speak of. It is a small, windowless room covered on two sides with bookcases filled with administrative staff manuals, advisory opinion letters, meeting minutes from advisory board meetings, and a whole host of other items that might be of interest to the public.

A desk lined the left wall upon entering. What appeared to be a 1990s-era IBM PC running a custom DOL version of MS-DOS sat on the desk. It was difficult to use and looked to be gathering dust. While this was the “public disclosure” room, we personally could not imagine many members of the public visiting the room, so the state of the computer did not surprise us.

By this point, Mike had realized that we would need to get some assistance from the DOL staff in order for this trip to be successful, so when an employee entered the room, he engaged him in casual conversation. Before long, both of us were standing behind the desk, looking over the staffer’s shoulder as he dug through the DOL database in search of the documents we described.

After thirty minutes of searching, we found what looked like an audited financial statement for the first company we had been looking for. After confirming that the document was in fact open to public inspection, we printed a copy. We repeated this process for ten to fifteen companies, so that we could ensure that the data was consistently available. We ended up leaving with audit reports from some of the companies with the largest retirement plans in the US, including IBM and HP, as well as some smaller companies that our friends worked at—Google and Facebook. We were informed that the reports would cost fifteen cents a page, which we agreed to, and left the DOL feeling buoyed by the fact that the data existed to accomplish our goals.

Our initial excitement about the data was quickly replaced by frustration. Upon returning to San Diego and working our way through the first fifteen plans, we did a quick back-of-the-envelope calculation that with sixty thousand audit reports, an average of fifty pages per report, and a cost of fifteen cents per page, it would cost roughly 450,000 dollars to obtain the complete dataset for a single year. To top it off, the DOL clearly had no way to provide the reports to us in bulk, as evidenced by the manual way in which the DOL staffer had printed the first fifteen reports for us. There were also procedural hurdles. While the DOL instructed filers to avoid putting personally identifiable information (PII), such as social security numbers, on the filings, they would occasionally still find filings with this information and have to redact them. While these redactions were rare, they still caused the DOL to create a policy of manually inspecting every printed page before providing the printed reports to the public.

With little to lose, we put together a list of the sixty thousand plans for which we needed data and filed a formal FOIA request. Within a few weeks, we found ourselves on a call with the DOL FOIA staff. We were told in no uncertain terms that our FOIA request was one of the most onerous requests they had ever received. In hindsight, given their limitations at the time, this assessment seems fair. However, when data is the only thing standing in the way of building a business, it is not what you want to hear.

We managed to work out a compromise with the DOL in which they would print out hundreds of audit reports at a time, put them into boxes, and ship them to us. It was not a sustainable system, but using that approach, we collected enough data to produce our ratings and launch our initial DC plan ratings to the public—and thus, our company BrightScope became a reality.

### From Adversaries to Partners

If forced to select a single term to define our relationship with the DOL up through early 2009, the word “adversarial” would certainly be appropriate. We were asking for data that was nearly impossible for the DOL to deliver without some fundamental procedural change investment in technology, yet we would not accept no for an answer.

That status quo of shipping boxes was still in place at the time we launched our public website. After initially choosing a launch date of January 19, 2009, we were wisely counseled to push back a week so we would not get lost in the news cycle of incoming President Barack Obama, whose inauguration was set for January 20th. The administration change seemed irrelevant to our business at the time, but when President Obama made his first order of business the release of his Memorandum on Transparency and Open Government, it grabbed our attention. The memorandum lacked formal teeth, but it was music to our ears:

> All agencies should adopt a presumption in favor of disclosure, in order to renew their commitment to the principles embodied in FOIA, and to usher in a new era of open Government. (Obama, 2009)

Our business had quickly become heavily dependent on gaining access to public data, but our progress was in fits and starts, surging ahead when a new box of data arrived and then flagging when data was delayed or did not come at all. Almost overnight, we felt a new tune coming out of Washington, a drumbeat of voices intent on making data open, transparent, and accessible, and we felt this could only be good news.

While some felt that Obama’s pledge did not cause any change, the DOL, to their credit, began to make steady progress in delivering on opening up their data. What started as the manual printing and mailing of documents transformed into the shipping of external hard drives with thousands of audits. This ultimately resulted in a bulk download utility that was accessible around the clock directly from the DOL website. We went from being constrained by data to having all of the data at our fingertips.

Meanwhile, our public ratings had begun to get serious traction. We received numerous write-ups in the *Wall Street Journal*, the *New York Times*, and other mainstream media, and the traffic to our 401(k) ratings pages was on an upward arc. Starting with just eight hundred plans rated at launch, we had reached fifteen thousand plans by October and thirty thousand plans by the end of December. To process this volume of documents, we brought on new engineers and hired and trained a team of data analysts. Our team quickly expanded from fewer than ten at launch to thirty by the end of the year.

Our relationship with the DOL has transformed over the years. We have spent a tremendous amount of time with DOL staffers and political appointees, who have always taken time out of their busy schedules to meet with us when we are in town. The relationship was facilitated by open government events, which allowed for more casual interaction and discussion of big picture objectives.

In November of 2012, our relationship with the DOL truly came full circle. Impressed with the work we had done analyzing the audit reports, the DOL signed up as a BrightScope client and began leveraging the data for a variety of purposes. What started as a contentious relationship has turned into a true partnership, thanks to the DOL embracing an open approach to data.

### Finding Comfort in Transparency

The changed relationship at the DOL is thanks to a combination of a mindset shift on the part of the department and an adoption of technology to solve a business process challenge. They became comfortable with more of their data being open to public inspection, and they started viewing companies like BrightScope as partners in their mandate of safeguarding retirement assets for participants. In some respects, the DOL’s new approach reminds me of the original description of the power of open government described in the influential paper “Government Data and the Invisible Hand” (Robinson, Yu, Zeller, & Felten, 2009). In the paper, the authors describe the limited role of government as requiring and enforcing appropriate disclosure, but stopping short of building interactive websites. This is instead focusing on opening up the data to the public so that the private market can engage with the data and ultimately drive its usage and interaction with the public:

> In order for public data to benefit from the same innovation and dynamism that characterize private parties’ use of the internet, the federal government must reimagine its role as an information provider. Rather than struggling, as it currently does, to design sites that meet each end-user need, it should focus on creating a simple, reliable, and publicly accessible infrastructure that “exposes” the underlying data. (Robinson, Yu, Zeller, & Felten, 2009)

This way of thinking about government is not new, but it is a fundamental shift from how we traditionally think about government. Asking government to stay focused on data collection and distribution and leaving the building of websites and value-added tools on top of the data to the private sector might seem like chaos to some, but this approach has worked wonders, even within the private sector.

Open government thinker Tim O’Reilly (2010) describes this phenomenon as “government as a platform.” BrightScope’s plan ratings can be thought of as an “app” on a government platform, leveraging data from the DOL and SEC. Undoubtedly, firms like BrightScope and others will be able to build faster, take more risks, and combine the DOL’s data with third-party data in more new, interesting, and cost-effective ways than the DOL could themselves. So, it makes sense for the DOL to focus on platformizing itself and taking advantage of the entrepreneurial energy and innovations of the private market.

### Defining Open Data

While BrightScope started with DOL data, as we have grown we have gathered data and information from a variety of public sources, including the Securities and Exchange Commission (SEC), the Census Bureau, and the Financial Industry Regulatory Authority (FINRA). Through the process of identifying high-value datasets and integrating them into our databases, we have encountered all different types of public disclosure. At BrightScope, we are fond of saying that “public” is not a proxy for accessible, usable, or high-value. It is useful, therefore, to describe the best practices of how government agencies and departments currently disclose data and some of the issues their methodologies create. In addition, through this analysis, it is useful to have a common framework with which to evaluate the quality of the disclosure, both in terms of data openness and legal openness.

### Technical Openness

When it comes to technical openness, our first belief is that releasing data in whatever state it is in is better than releasing no data at all. Startups have become remarkably adept at working with data and can usually develop processes to transform disclosed data into whatever form and format they need it in. That said, the lower the barrier to adoption, the more engagement you can generate around the data you are releasing.

The following framework comes from Cass Sunstein, President Obama’s regulatory czar, and the author of *Nudge: Improving Decisions About Health, Wealth, and Happiness* and *Simpler: The Future of Government*. In a memorandum for the heads of executive departments and agencies on September 8, 2011, he describes a simple four-part test he uses to define “smart disclosure:”

> 1. Accessible: Free, online and in bulk

> 2. Machine-Readable

> 3. Standardized

> 4. Timely (Sunstein, 2009)

When we first started working with the DOL, the disclosure failed all four tests. The data was not accessible online; it was not available in machine-readable formats; it was not standardized; and it was certainly not timely due to a nearly two-year delay for processing. However, the new DOL disclosure satisfies two of the four requirements. It is available online, both file by file and in bulk for developers, and it is timely, being published within twenty-four to forty-eight hours of the disclosure being filed. The reports are not machine-readable, unfortunately, nor are they standardized, largely due to the fact that the reports are narrative attachments to a document (the Form 5500), so they still require processing. I would still give the DOL high marks for making the most of what they currently receive, though.

### Legal Openness

Even once data is technically accessible, it must be open from a legal standpoint for it to be truly “open.” The “Open Definition,” as defined by the Open Knowledge Foundation, is perhaps the standard in defining legal “openness” as it relates to data and content. Their definition is simple:

> A piece of data or content is open if anyone is free to use, reuse, and redistribute it—subject only, at most, to the requirement to attribute and/or share-alike. (Open Knowledge Foundation)

Opening up data in this way, so that there are no limitations on use, reuse, and redistribution, can be tough to stomach for those with data. Some organizations with important consumer disclosures that they place on the web put strict legal limitations with how the information can be used. One example of this is the Financial Industry Regulatory Authority (FINRA). FINRA operates BrokerCheck, a website that provides tools for consumers to research brokers and broker-dealers. The BrokerCheck website has a prominently placed legal notice making clear its “closed” legal stance:

> The works of authorship contained in finra.org (the Site), ... may not be copied, reproduced, transmitted, displayed, performed, distributed, rented, sublicensed, uploaded, posted, framed, altered, stored for subsequent use, or otherwise used in whole or in part in any manner without FINRA’s prior written consent. (FINRA)

This legal language is against the spirit of open government. While the data is online and technically disclosed, it is not legally open and that distinction is important. It is certainly understandable for an organization like FINRA to have concerns about how their data will be used. Ensuring that data is correctly communicated to and interpreted by the public is an important goal, but if that was the only blocking issue, I think it could be overcome. I fear that organizations like FINRA do not open their data because they are concerned with the potential negative impact. As described by Gavin Newsom in his book *Citizenville*:

> [Information] often ends up being used against them. Historically, people who request data or information aren’t doing it because they want to solve a problem or create a program. They’re often doing it for political purposes, as a kind of “gotcha government. (Newsom, 2013)

We in the open data community need to do a better job communicating why the benefits of releasing open data outweigh the potential negative effects. If we fail to make the case, some of the highest value datasets will either be legally closed or hidden from public view entirely, which would dramatically limit the potential of the open data movement.

Fortunately, I think many government agencies and departments have been able to clear this hurdle. The DOL undoubtedly had internal questions and concerns about the results of disclosing in a legally open fashion, but even with a small dose of engagement from the developer community, that disclosure has yielded huge benefits. Organizations that publish data under a closed license lose the opportunity to cut their costs and leverage the combined skills and abilities of web-savvy engineers and entrepreneurs all over the world.

### Lowering the Barriers to the Next Generations of Civic Startups

At BrightScope, we spend a tremendous amount of time collecting, processing, and integrating the data we obtain from our government partners. We recognize, like most data companies, that data requires stewardship to ensure that the data quality is suitable for research, analysis, and public consumption. The challenge for a civic entrepreneur accessing data from the government is that, today, too much of their work lies in the behind-the-scenes discovery, cleansing, and matching across datasets and not enough in building the end tools for their users. By promoting data standards, we can ensure that the work we are doing as civic entrepreneurs and the money invested in our mission is funneled into the higher-value work of creating real tools for consumer decisions.

One example of this for BrightScope comes from the DOL filings. In order to calculate all of the fees consumers are paying within their 401(k) plans, we need to include the hard-dollar fees found directly in the Form 5500, as well as the fees coming from the plan’s investment options. This combination of administrative and investment fees becomes what we call “Total Plan Cost.” Fortunately, the investment lineup is contained in the audited financial statement. While the audited financial statement provides a list of investment options, it only requires the name of the investment and not an identification number for it. This makes it impossible to directly link the fund to data on mutual funds that is collected and disclosed by the SEC. As a result, BrightScope spends hundreds of thousands of dollars every year parsing out the fund names from the audited financial statement, matching the names to the correct SEC fund ID, and pulling in SEC fund fee data so we can effectively calculate each plan’s Total Plan Cost. Each additional data transformation we make opens the door to introducing errors into our database. If the DOL were to simply require plans to file a standardized schedule of assets with the SEC fund ID, then BrightScope could take the hundreds of thousands of dollars we invest in our current process and invest it higher up the value chain instead. Across the federal government, there are literally thousands of examples where a lack of coordination across agencies and departments leads to lost opportunities to make mash-ups of government data tremendously easier for entrepreneurs.

A more prominent example of this phenomenon is all the data released every year across state and federal governments about individual companies. Information about their earnings is available from the SEC; information about their retirement plans are available from the DOL; information about their lobbying activity is available from the Senate Office of Public Records; information about their environmental record is available from the Environmental Protection Agency; and information about federal contracts they have won is available from the General Services Administration. Yet, there is no easy way to link all of these datasets together.

This is actually a broader issue that came to light during the financial crises, in which the debt of failing institutions was hard to track down, and thus, it was difficult for companies to gauge their “counterparty risk.” This difficulty—and the rapidly declining risk tolerance of the firms in question due to liquidity concerns—caused a freeze in the OTC derivatives and, ultimately, the credit markets in which banks and others refused to lend because of concern about their existing exposures. This issue has led to calls from industry for an international Legal Entity Identifier (LEI) system in the financial markets. It is designed to handle the hierarchy problem—for example, it is estimated that AIG has over 250 operating subsidiaries and operations in 130 countries. The benefits of LEI are important:

> The Legal Entity Identifier (LEI) program is designed to create and apply a single, universal standard identifier to any organization or firm involved in a financial transaction internationally. Such an identifier for each legal entity would allow regulators to conduct more accurate analysis of global, systemically important financial institutions and their transactions with all counterparties across markets, products, and regions, allowing regulators to better identify concentrations and emerging risks. For risk managers in financial institutions, the LEI will increase the effectiveness of tools aggregating their exposures to counterparties. (The Depository Trust & Clearing Corporation, 2012)

While LEI is designed to solve a problem in the financial markets, it may also serve the open government community, provided it is either adopted throughout the government or utilities are built that provide mapping from the codes of each individual branch of government to the LEI. This is also not the only approach. Open government advocates, like Beth Noveck (a founder of ORGPedia) and the Sunlight Foundation, have taken the lead on advocating for a better approach, but there is still much work to be done.

Creating open source standards for identification and linking across datasets is not easy, but with every breakthrough, we lower the barriers to adoption of data for analysis and research. The benefits accrue to open data entrepreneurs and also to the very government agencies and departments tasked with regulating the companies, products, and industries that presently lack standards.

### Closing Thoughts

While we did not think of ourselves as civic entrepreneurs when we started, our history is really a history of government as a platform and building a business on public data. When we first met and spoke with open government evangelists, like Tim O’Reilly, Jen Pahlka, Alex Howard, Beth Noveck, Laurel Ruma, and countless others, we began to realize how powerful an idea it truly was to provide entrepreneurs with data and access to government. BrightScope is proof that building a viable, for-profit business on top of government data can be a sustainable business model that both benefits government and provides enormous opportunities for entrepreneurs. Now, it is up to the open data community to work to lower the barriers to entry for future civic entrepreneurs.

### About the Authors

Ryan Alfred is Co-Founder, President, and COO of BrightScope, a financial information company that brings transparency to opaque markets. Ryan is a noted expert and frequent speaker on financial industry regulation and is actively engaged in the debate in Washington DC about issues relating to retirement. Ryan was named to *Forbes*’ Top 30 Under 30 in Finance (2012) and to the *SmartMoney* Power 30 (2011).

Mike Alfred is Co-Founder and CEO of BrightScope. Previously, Mike was the Co-Founder and Portfolio Manager of Alfred Capital Management LLC, an independent registered investment firm located in La Jolla, CA. He has been a Financial Advisor and Portfolio Manager since 2003. A noted and quoted 401k and financial expert, Mike has appeared on CNBC, ABC News, Fox Business News, National Public Radio and in the *Wall Street Journal*, the *New York Times*, *USA Today*, *Forbes*, *BusinessWeek*, and many others.

### References

* Financial Industry Regulatory Authority, Inc. (2013). Legal Notices. Retrieved from http://www.finra.org/Legal/index.htm
* Newsom, Gavin (2013). Citizenville: How to Take the Town Square Digital and Reinvent Government. New York, NY: The Penguin Press.
* Obama, B. The White House, Office of the Press Secretary. (2009). Freedom of Information Act. Retrieved from http://www.whitehouse.gov/the_press_office/FreedomofInformationAct
* Open Knowledge Foundation. (n.d.). Open Definition. Retrieved from http://opendefinition.org
* Robinson, D. G., Yu, H., Zeller, W. P., & Felten, E. W. (2009). Government Data and the Invisible Hand. Yale Journal of Law & Technology, 11, p. 160. Retrieved from http://papers.ssrn.com/sol3/papers.cfm?abstract_id=1138083
* Sunstein, C. R. (2011, September 8). Informing Consumers Through Smart Disclosure. Retrieved from http://www.whitehouse.gov/sites/default/files/omb/inforeg/for-agencies/informing-consumers-through-smart-disclosure.pdf
* The Depository Trust & Clearing Corporation. (2012, November 26). Legal Identity Identifier. Retrieved from http://www.dtcc.com/products/dataservices/lei.php
