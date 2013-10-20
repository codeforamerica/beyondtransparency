--- 
layout: chapter
title: "Pioneering Open Data Standards: The GTFS Story"
chapter: 10
part: 2
author: 
  - 
    name: Bibiana McHugh
    job: IT Manager
    employer: Trimet
    photo_url: /images/authors/bibiana.png
    twitter: trimet
    about: "IT Manager of Geographic Information Systems for Portland's Trimet public transit agency. Open data evangelist."

featured: true

permalink: "/part-2/pioneering-open-data-standards-the-gtfs-story/"
---

In 2005, I was working at TriMet, the public transit agency in Portland, Oregon, as an IT manager for Geographic Information Services. Earlier that year, while traveling, I found it very frustrating to try and find transit directions in the unfamiliar cities I was visiting. This was especially true when transportation agencies that provided differing services or areas were not consolidated. It was much easier at that time to get driving directions from popular online mapping services, and I realized this was probably encouraging car usage over public transit.

In my role at TriMet, I worked with transit data every day, so I knew such data was available and the potential was there. We offered our own online transit trip planning tool, as many agencies do. The trouble was, the average citizen often didn’t know where to go to find this information, especially if he or she was unfamiliar with the local transit system. The general public was used to going to certain online destinations for driving directions—Google Maps, MapQuest, and Yahoo were all widely used at the time—but the data they needed to plan a trip using public transit wasn’t available where they were looking.

### Bringing Data to the Citizens

As a public servant who had worked to improve public transit for nearly a decade, I saw this as a missed opportunity to promote public transit to an audience that might not be aware of the option. When I returned to Portland, I made it my mission to make it just as easy to get transit directions as it is to get driving directions from anywhere in the world. I reached out to several companies to inquire about the idea of integrating Portland’s public transit data into their existing navigation products in order to allow users to plan transit trips.

After some persistent follow-up with no response, I contacted Jeremy Faludi after reading his article “A Call for Open-Source Public Transit Mapping” (Faludi, 2005). He introduced me to Chris Harrelson, a software engineer at Google who had the same idea in mind. He and a group of like-minded volunteers had been working on building out a prototype of Google Transit during their twenty percent flexible project time. They had the idea and the basic infrastructure. What they needed to continue was a government partner who could provide service data (routes, timetables, etc.).

In July of 2005, we got together with the team at Google to discuss the project. At first, some of the TriMet staff were hesitant to hand over the data—it’s very complex spatial-temporal data that is difficult to handle correctly. But when we saw that Chris’ team knew what they were doing, we were very impressed. Tim McHugh, TriMet’s Chief Technology Officer, generated the initial data export that same night—the beta version of what would eventually become the first widely used transit data standard.

TriMet already had an existing centralized enterprise database that housed all of the relevant data already pieced together in good form. Having this foundation in place was significant—only because of this was it possible to write an initial script in less than an hour that would export the data required for transit trip planning. We published this schedule data in the form of CSV files based on our existing internal database schema and shared it with Google, as well as publicly on our website, so that any third-party developer could access and use it.

The other component was that our agency leadership gave us support to move ahead with the experiment. Carolyn Young, our executive director, gave us permission to open the data almost as soon as we had the idea. We were lucky that our agency has a long history of supporting open source and open data. TriMet’s TransitTracker™ (next arrival times) feed was already open, so outside developers were already using TriMet open data prior to 2005. We had had an open source-friendly procurement policy in place for a decade. These factors meant that the TriMet culture was primed to be supportive of this type of initiative, which allowed us to move quickly.

On December 7, 2005—less than five months after our initial conference call—the first version of Google Transit was launched with TriMet data that covered the Portland Metro area (Garg, 2005). The launch received an overwhelmingly positive response. As Google Transit went live for the first time, word first spread across Europe. According to the Google Transit Team, they watched in amazement as the number of hits to the site increased exponentially. By morning, as the US awoke, the counts were reaching staggering numbers, even by Google standards.

The day of the launch, I did numerous interviews with local TV stations, newspapers, and even several radio stations. It seemed we were onto something important—something that people cared about. We knew we needed to get other agencies on board so that this could expand beyond Portland.

### Scaling Up

We had held a workshop just before the launch of the Google Transit beta, in an attempt to get other agencies and developers on board with the effort to open and standardize this data. Multiple transit agencies participated—including representatives from Seattle, Chicago, and New York, among others—but many were apprehensive. A common concern was that providing data in the standard open format wouldn’t benefit the agency; it would only benefit Google.

However, this resistance turned around as soon as everyone saw the positive public response to the launch announcement. Agencies saw that they could benefit from being involved—not just by getting good publicity for their agency, but also by offering a service that was clearly in demand by the public. Department heads started calling us, asking, “How can we be next?”

To scale up to more cities, it was essential that transit agencies standardize and publish their schedule data so that it could be integrated into third-party apps the same way across jurisdictions. We worked with Google and with several of the interested agencies to develop this standard format, then called the Google Transit Feed Specification (GTFS), based closely off of the first series of data that TriMet had published.

We chose to keep the files in CSV format. We wanted it to be as simple as possible so that agencies could easily edit the data, using any editor. This approach received substantial criticism—it was even called “technically old-fashioned and brittle” (KiZoom, 2006)—but it was important to us to keep the barrier to participation low so that even smaller, less-resourced agencies could join in. As Google Transit team member Joe Hughes put it in his original welcome message on the GTFS discussion list:

> We chose CSV as the basis for the specification because it’s easy to view and edit using spreadsheet programs and text editors, which is helpful for smaller agencies. It’s also straightforward to generate from most programming languages and databases, which is good for publishers of larger feeds. (Hughes, 2007)

In September 2006, Google Transit launched in five more cities that began publishing their service data in the nascent standard format: Tampa; Honolulu; Eugene, Oregon; Pittsburgh; and Seattle. Shortly thereafter, we published the first version of the GTFS spec under a Creative Commons License (“What is GTFS?” 2012).

Within a year, Google Transit launched with fourteen more transit agencies in the United States and expanded internationally to Japan. As of July 2013, Google Transit has launched in hundreds of cities worldwide (“Google Maps: Transit: Cities Covered,” n.d.). Detailed transit instructions, in addition to driving directions on Google Maps, is available in Africa, Asia, Australia, Europe, North America, and South America.

In early 2007, TriMet and other transit agencies began to publish their transit data openly, in a more formal and publicized way, with official sites for developer resources. TriMet and San Francisco’s BART, the Bay Area Rapid Transit, were the first agencies, and others soon followed as the benefits became increasingly apparent (“Developer Resources,” 2013; “For Developers,” 2013).

TriMet’s core business is not software development. By making our data open, we were able to leverage external resources to bring benefits to the public. Making transit data publicly available and collaborating with a community of software developers has resulted in hundreds of useful and popular transit applications for TriMet customers and many others. Many have all been developed by third parties offering a wide range of creative and useful tools available on multiple platforms for a variety of users. When I asked Tim McHugh about why he supported opening our data to third-party developers, he explained:

> Due to the large proliferation of transit applications on mobile platforms, the market is able to react quickly to changes and to fill gaps in service. This is something that one government IT department could not develop or support with the same level of spontaneity and flexibility. (McHugh, personal communication, 2013)

One of the first initiatives President Obama introduced was an open government initiative (“About Open Government,” n.d.). This resulted in Data.gov, a resource for software developers and a resource for applications in support of open data and open source software. This movement has spread to many cities, states, and countries, bringing many benefits to the public. Having already released open data in transit put us in a good position to respond quickly to the mandate and take advantage of this new momentum from the top.

In addition to online groups, forums, and mailing lists, other sites, like the GTFS Data Exchange (www.gtfs-data-exchange.com), began to emerge to establish communities around the standard and facilitate wide adoption in the industry. Companies that offer support for the production and maintenance for GTFS began to fill an important void in the industry. GTFS began to generate business and business incentives.

### Why Standards Matter for Cities

I believe there are several important ingredients that made the GTFS initiative successful:

* A collaborative team that started small and designed for a very specific use.
* Releasing the transit data specification in an open standard; the simplicity of the specification and format.
* A tangible business incentive for the transit agencies and for private partners to participate.
* The contributions and involvement from the worldwide community of users.

The biggest advantage of being part of the GTFS standard for agencies is that their information appears in a global set of search products that are easy to use and visited by millions and millions of people every day. People who do not know a city well, are visiting, or are simply unaware of the agency’s services, can benefit and find alternatives to driving. Regular public transit riders benefit from being able to find transit information in a familiar user interface and in the context of other useful information. It’s about providing better information and service delivery for citizens, which is ultimately aligned with any agency’s mission.

This all comes at a low cost for the city. At TriMet, our process is automated, so there is very little overhead. TriMet has four major service changes a year, in addition to minor changes and adjustments in between. We may update and publish our GTFS data as frequently as twice a month. TriMet has not incurred any direct costs for this specific project, except resource time, which is a very small investment in comparison to the returns.

Now that agencies have made GTFS freely available as open data, hundreds of applications have spawned worldwide. We found that by making our data easily and openly accessible, developers are getting very creative and expanding its use. This is not only beneficial because it expands the number of product offerings available, but it can also have emergent economic benefits for developers and the communities they live in. In addition, because the standard allows for interoperability between cities, applications built to serve one city can be readily deployed to serve other cities for a much lower cost and effort than if the data wasn’t standardized.

Early on in the adoption of GTFS, it was suggested that transit agencies charge fees for their GTFS data. However, it became apparent that the return on investment (ROI) was far greater than potential sales on the data. In addition, Public Records requests reminded agencies that making sought-after data openly available was a far better solution than addressing many requests individually. Some developers resorted to screen-scraping the data off transit sites, which was not a stable method that ensured access to current and accurate customer information. It became apparent that open data in a standard format was the solution that was in the best interest of the public.

### Lessons Learned for Scalable Standards

Civic data standards are not just limited to the realm of public transit. Data is a central component of every facet of public service, and there is an opportunity for standards in many of them. Emergent efforts include those like Open311, a standard format for civic issue reporting; LIVES, a format for restaurant inspection data; and House Facts, a standard for residential building inspection data. Lessons from our work developing GTFS can help inform how to build a truly scalable and open data standard for cities.

A key to the success of GTFS was that we built around a real use case. We saw a real problem and a way to solve it with data. Because the standard clearly linked to a real-life problem, we were able to articulate a real ROI for adoption. It’s important to take the time to think through all the different stakeholders and how they can benefit from participation. Don’t underestimate the value of publicity as a tool when pushing to get those first adopters on board. Public agencies are usually accustomed to getting negative media coverage when something goes wrong and no coverage when something goes right. The chance to get positive press for the good work they are doing is often a powerful incentive. It was game changing when TriMet gained national attention at the launch of Google Transit.

Working with a well-known national partner to integrate the data can provide a tremendous amount of the momentum needed to succeed. Working with Google enabled us to show scalable value quickly, as well as gain attention from the association with their brand. We could immediately show national, and even worldwide, relevance through integration with Google’s existing widely used products.

However, it’s important not to conflate the identity of an open standard with the brand of a corporate partner. While we engaged other open source developers to build apps on the standard and created partnerships with industry vendors who supplied transit data services to provide standards-compliant export functionality for their customers, we received pushback: agencies didn’t want to be perceived as giving their data to Google exclusively, and developers were reluctant to develop off of a standard that had Google in the name. We eventually changed the name from Google Transit Feed Specification to General Transit Feed Specification—and the effect was transformative. It greatly reduced resistance from software vendors; proponents of existing transit data standards; companies that assembled and resold public data; and transit agencies who were worried about losing control of their data.

In addition to a national partner, the involvement of other developers and partners (including civic hackers, other cities, and larger vendors) is crucial for scalability and neutrality of the standard. Be agile and evolve to support other entities and applications.

It’s amazing that GTFS has since been adopted relatively quickly on a worldwide platform, but it’s even more amazing to think it has been adopted worldwide voluntarily. Apparent and persuasive ROIs, its unpretentious and evolving nature, and its supporting community are all key growth factors.

### Standards for Better Public Service

Why did we do all this? I believe it comes back to the core meaning of the term “public service.” It is about providing the best experience possible to our citizens. At TriMet, we believe it should be just as easy for our customers to plan transit trips as it is to get driving instructions. Opening up this data to allow for wider use and integration with existing services is putting a new face on public transportation and reaching a much wider audience than we as a single local agency could ever hope to. Contrary to speculation that third-party transit applications are drawing attention away from transit agencies and their brand, TriMet is finding that many applications are reaching a broader audience. They direct potential customers to more comprehensive information on an agency’s site that may otherwise be unknown.

We still offer our own TriMet trip planner, as we feel it is our responsibility to provide that service to our customers, but Google Transit, Bing Maps, and all the other apps that developers have built using this data, offer our customers another way to plan their trips with different options and features. GTFS lets us meets citizens where they already are and builds interoperability across municipalities as it expands to more cities.

The next logical step after GTFS was developing a specification for real-time transit data in addition to schedule data. TriMet, MBTA, BART, and MTS worked with Google on a new specification for real-time transit data, not just scheduled: the General Transit Feed Specification-realtime or GTFS-RT (“What is GTFS-realtime?” 2012). This information is very beneficial to our customers, and wide adoption is growing. We look forward to seeing the impact of civic data standards as they expand to other areas of transit and public service.

As Chris Harrelson has said:

> It’s perhaps easy to jump to the conclusion that Google is the hero in this story, in the typical role of the innovator who overcomes the inefficiencies of the past, but this is really not true in this case. This is a success story about a new model of cooperation in order to solve a problem that cannot be addressed directly with either market forces or a classic government solution. Everyone had an equally important role to play, and without TriMet and other government advocates, this story would not be possible. (Harrelson, personal communication, 2013)

GTFS began with a single public agency and single private company working together to solve a common problem creatively. The extensive community of agencies and GTFS users continue to collaborate on evolving the standard to meet the requirements of many more applications. The end result is that it is now just as easy to get transit directions as it is to get driving directions from nearly anywhere in the world.

### About the Author

Bibiana McHugh has worked in TriMet’s Information Technology Department since 1997 and currently leads a team of innovative web developers and analysts as the IT Manager of Geographic Information Systems and Location-Based Services. She leads several open data and open source software initiatives including opentripplanner.org, maps.trimet.org, rtp.trimet.org, developer.trimet.org, and trimet.org/apps. After initiating collaboration with Google for the first release of Google Transit, she helped pioneer the now worldwide standard General Transit Feed Spec (GTFS). She received a degree in Geography from the University of Kansas.

### References

* Bay Area Rapid Transit. (2013). For Developers. Retrieved from http://www.bart.gov/schedules/developers/index.aspx
* Faludi, J. (2005, June 5). A Call for Open-Source Public Transit Mapping. Retrieved from http://www.worldchanging.com/archives/002937.html
* Garg, A. (2005, December 7). Public transit via Google. Retrieved from http://googleblog.blogspot.com/2005/12/public-transit-via-google.html
* Google Developers. (2012, January 12). What is GTFS? Retrieved from https://developers.google.com/transit/gtfs/
* Google Developers. (2012, July 26). What is GTFS-realtime? Retrieved from https://developers.google.com/transit/gtfs-realtime/
* Google Maps. (2013). Transit: Cities Covered. Retrieved from http://www.google.com/landing/transit/cities/index.html
* Hughes, J. (2007, May 18). General Transit Feed Spec Changes (Msg. 1). Message posted to (https://groups.google.com/forum/#!msg/gtfs-changes/C5dgsKGkpDA/kyxN1DCS-dQJ
* KiZoom. (2006). The Google Transit Feed Specification — Capabilities & Limitations: A Short Analysis.
* The White House. (n.d.). About Open Government. Retrieved from http://www.whitehouse.gov/open/about
* TriMet. (2013). App Center: Transit Tools for the Web and Mobile Devices. Retrieved from http://trimet.org/apps/
* TriMet. (2013). Developer Resources. Retrieved from http://developer.trimet.org/
