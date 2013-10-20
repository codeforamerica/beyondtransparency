--- 
layout: chapter
title: Building a Smarter Chicago 
chapter: 3
part: 1
author: 
-
  name: Dan X O'Neil
  job: Executive Director
  employer: Smart Chicago Collaborative
  photo_url: /images/authors/daniel.png
  twitter: danxoneil    
  about: "Making lives better in Chicago through technology. Former co-founder of EveryBlock."

permalink: "/part-1/building-a-smarter-chicago/"
featured: true
---

### Introduction

As the open data and open government movement continues, there is a lot of talk about building local ecosystems for the work. The general idea is that there has to be a mildly magic combination of data, policy, developers, capital, and products to enable the kind of growth that is necessary to take the movement to the next level—where there is a mature market for open government products that serve real community needs and lead to sustainable revenue.

The thing about building an ecosystem is that when it is done deliberately, it can be a slog. Building a developer community from scratch, convincing local government to publish data, getting venture capitalists to take a look at open government projects—all of this is tough work that takes time.

By looking at the Chicago example, however, we can see that there’s often more built than it first seems. The components can be found, in varying degrees, in any unit of government. The trick is to find, cobble, and congeal these pieces together.

What follows is an illustrative, incomplete, and idiosyncratic look at the ecosystem in Chicago. It is meant to provide a thumbnail take on how the ecosystem developed here, while sparking fires elsewhere.

### Data: An Era of Incidental Transparency

The story starts with Citizen ICAM (Information Collection for Automated Mapping), the granddaddy of all crime mapping applications, created by the Chicago Police Department in May 1995. I wrote about this system back in 2006 because I wanted to understand the archaeology of this distinctly unique (and relatively difficult to use) interface (O’Neil, 2006). You can learn a lot about software by its backstory. Here’s the first sentence of a July 1996 National Institute of Justice report on Citizen ICAM:

> To better understand the nature and extent of criminal and social problems in the community and improve allocation of resources, a growing number of crime control and prevention organizations are turning to computerized mapping. (Rich, 1996)

The impetus behind the project (“Citizen” is the first word in its name) was the Chicago Alternative Policing Strategy (CAPS) program. Here’s another snip from the 1996 report:

> ICAM was developed as part of CPD’s far-reaching and ambitious community policing strategy. Unlike many other community-policing programs that are limited to a single unit in the department, the Chicago Alternative Policing Strategy (CAPS) is department-wide. The strategic plan for reinventing CPD describes CAPS as a “wholesale transformation of the department, from a largely centralized, incident-driven, crime suppression agency to a more decentralized, customer-driven organization dedicated to solving problems, preventing crime, and improving the quality of life in each of Chicago’s neighborhoods.

> In fact, CAPS is really a city program with strong support from the Mayor’s office and close involvement of city agencies, which have been directed to give top priority to “CAPS service requests” that affect crime and neighborhood safety. (Rich, 1996)

This twenty-year-old project is a model for where we need to be now—and where the movement seems to be heading. It starts with deep input from residents to form a “customer-driven organization.”

In the technology world, we call these people “users.”

Adrian Holovaty’s ChicagoCrime.org—widely considered a major impetus in the open data movement—simply would not have existed without Citizen ICAM (Holovaty, 2008). At the same time, ChicagoCrime.org was certainly not well-formed public data. For instance, all data was retrieved by scraping with obscure URL calls that ignored the user interface, which limited searches to a quarter-mile radius.

Another example is transit data “published” by the Chicago Transit Authority in the context of their proprietary Bus Tracker system. I covered this extensively in a January 2009 blog post (O’Neil, 2009). The upshot is that Harper Reed scraped all data driving the app, cached it, and served it to developers. This led to a blossoming of transit-focused apps.

The culmination of this work is the publication of the CTA’s own API, a document wherein Harper and I are explicitly called out for helping them develop it:

> Special thanks go to Harper Reed and Dan O’Neil for their support and encouragement, and to the independent development community, for showing such great interest in developing applications with CTA data, leading to the creation of this official API. Thank you. (Chicago Transit Authority, 2011)

This is the kind of inside/outside game that is also essential to the ecosystem. You have to work with government institutions to make their data fluency and data policy better.

A last example of early data in Chicago (and perhaps the first explicitly conscious publication of data in the city) is the wealth of Geographic Information Systems (GIS) data published by the City of Chicago. This was another early reason why ChicagoCrime (and, by extension, EveryBlock) could exist. Their policy was formalized in July 2007, but the data had been available long before that (City of Chicago, 2007).

The first section of their documentation, “Data Sharing Principles,” has the idea that public information should be public: “Wherever possible, direct requestors to publicly available internet sources of map information.”

This is the moment when the governmental provision of data goes from incidental to essential. Before that magic moment, it’s important for developers and citizens to look harder for data published in plain sight.

### Policy: Enlightened Self-Interest Meets the Movement

As a co-founder of EveryBlock, I spent four years (2007 to 2011) working with sixteen municipalities on publishing data. I saw some fundamental patterns of open data policy development that held true here in Chicago.

First off, I can’t emphasize the power of examples enough. In December 2007, I was part of a meeting of open data advocates in Sebastopol, California. The mission was “to develop a more robust understanding of why open government data is essential to democracy.”

The output was the “8 Principles of Open Government Data” (Open Government Working Group, 2007). This simple document was a powerful, unimpeachable tool that I used every time I worked with government. It made a significant difference because it gave government-based open data advocates something to point to when they were in their internal meetings. This support of isolated pockets of policymakers was one important pattern I saw here in Chicago as well. Building relationships with public, sharable resources, like the “8 Principles,” allowed for shared trust and shared work. This pattern of template sharing is something that works.

There were nascent open data plans and products in the Daley administration, including Chicago Works For You, a project I worked on as a consultant for the City in 2005. Micah Sifry discussed this project in a 2009 article titled “A See-Through Society”:

> People are eager for access to information, and public officials who try to stand in the way will discover that the internet responds to information suppression by routing around the problem. Consider the story of a site you’ve never seen, ChicagoWorksForYou.com. In June 2005, a team of Web developers working for the City of Chicago began developing a site that would take the fifty-five different kinds of service requests that flow into the city’s 311 database—items like pothole repairs, tree-trimming, garbage-can placement, building permits, and restaurant inspections—and enable users to search by address and “map what’s happening in your neighborhood.” The idea was to showcase city services at the local level. (Sifry, 2009)

Early failures often lead the way to the next policy win—that’s another pattern.

Hot topics that receive public attention are fecund areas for open data policy. In Chicago, Tax Increment Financing is a big topic, mainly because it has been an opaque financial instrument, handling huge amounts of money with very little public information about how the system works.

It’s no accident that a number of Aldermen sponsored the TIF Sunshine Ordinance in 2009 (Brooks & O’Neil, 2009). Pressure and heat get results.

The last pattern has perhaps led to the most good: when the chief executive of a unit of government wants to make a big push. Mayor Michael Bloomberg of New York won an unusual third term at the same time he pushed for BigApps; San Francisco Mayor Gavin Newsom was planning a run for governor at the same time he worked to open DataSF; and our own Mayor Rahm Emanuel embraced open data when he made a move from the White House to Chicago City Hall.

This is the pattern of powerful, enlightened elected officials in the executive branch deciding that open data is good policy. They back this up by empowering people, like former Chicago CIO Brett Goldstein and CTO John Tolva, to develop and implement that policy.

It’s the unique and aggressive policy of publishing data that has brought the movement further here in Chicago.

### Developers: Civic Activism

Every city has its own history and its own approach to the world, and I think that is expressed in its technological history as well. Chicago has been a center of civic activism and individual public creativity for decades.

It can be traced as far back as Jane Addams, who created the Hull House in 1889. It was the first “settlement house,” cooperative residences for middle-class “settlers” in predominantly immigrant neighborhoods that aimed to reduce inequality in urban areas (Wade, 2004). She was also a tireless scholar who studied the geographical distribution of typhoid fever and found that it was the working poor who suffered most from the illness.

Chicago is the place where the drive for common standards, like the eight-hour workday, was fought (Jentz, n.d.). It was a center for the battle against mortgage redlining (the practice of denying or raising prices for mortgages that has played a role in the decay of cities). Activists used data to understand the predicament and prove their case.

The General Transit Feed Specification (GTFS) is a recent national example of success in putting civic data to use for the public good. Everyone loves CTA bus tracker apps, but few people know that the installation of the GPS satellite technology making that possible is the result of a lawsuit brought by a group associated with the Americans Disabled for Accessible Public Transit (Chicago Transit Authority, n.d.). Their case, Access Living et al. v. Chicago Transit Authority, required “installation of audio-visual equipment on buses to announce bus stop information to riders who have visual impairments or are deaf or hard of hearing” (Equip for Equality, n.d.). When you hear the loudspeaker system announce the next street where the bus is stopping, you have de facto data activists to thank.

This is the place where saxophonists rise from the stage, blare out a ten-minute solo, and calmly fade back into the band. It’s the place where slam poetry was conceived—individual poets audaciously grabbing the mic for three minutes and getting judged by the crowd. It’s also where improv comedy—with its focus on ensemble and fast thinking—was invented.

These are threads for us in the civic innovation movement here in Chicago. I believe they’re embedded in the work. They form examples for us to follow—the quiet humility of the worker in the crowd, the developer among the people.

You can find recitations of particular apps using specific datasets anywhere. Just remember that every city has unique cultural and technological histories. This is the essence of an ecosystem, and it’s why they are local.

It’s one thing to recognize history and another to build a local movement from it. Here are some of the entities that have helped form and accelerate the work:

* Illinois Data Exchange Affiliates was an early-incarnation open data group that led the way (Illinois Data Exchange Affiliates, 2007).
* Independent Government Observers Task Force was a 2008 non-conference, where many of the leaders of the movement worked together (Independent Government Observers Task Force, 2008).
* Open Government Chicago(-land) is a meetup group started by Joe Germuska (Open Government Chicago(-land), 2013).
* Open Gov Hack Nights are weekly meetings that have been critical to accelerating the pace of development (Open Gov Hack Night, n.d.).
* Digital.CityofChicago.org is a publication at the center of city policy and examples (“Release All the Data,” 2013).

### Capital: Philanthropy Leads, Capital Must Follow

Without money, there is no sustainability.

As an ecosystem matures, it finds ways to adapt and grow. In technology and data, growing means capital. In Chicago, a main source of capital currently comes from philanthropic sources, though there are some stirrings in the market.

The first open government data apps contest—Apps for Metro Chicago—was primarily funded by the MacArthur Foundation (O’Brien, 2011). The contest was an important moment in the ecosystem—it was the first time that government and developers were brought together in the context of a project with cash prizes.

The Smart Chicago Collaborative, a civic organization devoted to improving lives in Chicago through technology, is funded by the MacArthur Foundation and the Chicago Community Trust. Additional funding came through the federal government’s Broadband Technology Opportunities Program, a program designed to expand access and adoption of broadband opportunities in communities across America (National Telecommunications and Information Administration, n.d.).

EveryBlock was funded by a $1 million grant from the Knight Foundation, and then was acquired by MSNBC. This was a test of using philanthropic money and open source as a basis for a business. There have not been many examples since then. This is a problem that needs to be fixed—we need more experimentation, more value.

A digital startup hub in Chicago, known as 1871, has a number of civic startups in their space, including Smart Chicago, Tracklytics, Purple Binder, and Data Made. As these organizations deliver more value, the entire civic innovation sector will attract more capital.

### Products: The Next Frontier

In order for the ecosystem to be self-sustaining, we have to create popular, scalable, and revenue-generating products with civic data.

Developers in Chicago are making a renewed focus on users. An example is the Civic User Testing Group run by Smart Chicago (Smart Chicago Collaborative, n.d.). We’ve spent years trying to get regular residents to participate in the product development process, and now we have more than five hundred people signed up in our first six months.

We have to do this—go beyond anecdote, beyond the cool app that lacks real traction, into creating business models and datasets that add value. We need to make products and services that people can’t live without.

This will require a mix of proprietary solutions, open source code, and shared standards. Companies need to follow viable product strategies—moving from one-off apps to sustainable systems. Interoperable data is a critical component to making this happen.

The good thing about this is that there are models to follow in other successful companies right here in Chicago. SitterCity is a vast consumer success story. OpenTable, Groupon, and GrubHub are all Chicago companies that found ways to reduce transaction friction in various markets.

They did this, in the main, with a strict attention to customers. In the civic innovation sector of the technology industry, we call those people “residents.” When you are serving people and make popular products, you are necessarily serving a civic need.

We’re beginning to focus on this work here in Chicago by adding value to civic data with unstructured public content, by creating systems around predictive analytics, and making baseline services, like Open311, that can serve future product needs.

### What’s Your Ecosystem?

This is a short take on a complicated subject that, in the end, has to be completely local. Hopefully, it gives some specific examples of how we’ve built an open data ecosystem in Chicago and points to how far we have to go.

Chicago has contributed, in our small way, but we have to be measured by how we contribute to the entirety of the internet, rather than this civic innovation subset. We’re ready to keep going, and we’re excited to share our models with the rest of the country and the world.

### About the Author

Daniel X. O’Neil is the Executive Director of the Smart Chicago Collaborative, a civic organization devoted to making lives better in Chicago through technology. Prior to Smart Chicago, O’Neil was a co-founder of and People Person for EveryBlock, a neighborhood news and discussion site that served 16 cities until February 2013. He’s a co-founder of the OpenGovChicago meetup group.

### References

* [Brooks, M. & O’Neil, D. X. (2009, August 5). Chicago’s First Attempt at TIF Sunshine Falls Short. Progress Illinois. Retrieved from http://www.progressillinois.com/2009/8/5/columns/tif-sunshine-review](http://www.progressillinois.com/2009/8/5/columns/tif-sunshine-review)
* [Chicago Transit Authority. (2011, June 16). Bus Tracker API Documentation. Retrieved from http://www.transitchicago.com/asset.aspx?AssetId=2917](http://www.transitchicago.com/asset.aspx?AssetId=2917)
* [Chicago Transit Authority. (n.d.) Open Data from CTA. Retrieved from http://www.transitchicago.com/data/](http://www.transitchicago.com/data/)
* [City of Chicago, Department of Business and Information Services. (2007, July). GIS Data Sharing Policies and Procedures. Retrieved from http://www.cityofchicago.org/dam/city/depts/doit/general/GIS/GIS_Data/Data_Sharing/GIS_DataSharingPolicy.pdf](http://www.cityofchicago.org/dam/city/depts/doit/general/GIS/GIS_Data/Data_Sharing/GIS_DataSharingPolicy.pdf)
* [City of Chicago. (2013, April 1). Release All the Data. Chicago Digital. Retrieved from http://digital.cityofchicago.org/index.php/release-all-the-data/](http://digital.cityofchicago.org/index.php/release-all-the-data/)
* [Equip for Equality. (n.d.). What is the Access Living et al. v. Chicago Transit Authority Class Action Settlement Agreement? Retrieved from http://www.equipforequality.org/programs/transportationrights/ctasettlement.php](http://www.equipforequality.org/programs/transportationrights/ctasettlement.php)
* [Holovaty, A. (2008, January 31). In memory of chicagocrime.org. Retrieved from http://www.holovaty.com/writing/chicagocrime.org-tribute/](http://www.holovaty.com/writing/chicagocrime.org-tribute/)
* [Illinois Data Exchange Affiliates. (2007). The Business Case for Real-time Sharing of Government Data. Retrieved from http://downloads2.esri.com/campus/uploads/library/pdfs/132035.pdf](http://downloads2.esri.com/campus/uploads/library/pdfs/132035.pdf)
* [Independent Government Observers Task Force. (2008). Independent Government Observers Task Force: A Non-Conference. Retrieved from http://igotf.org/](http://igotf.org/)
* [Jentz, J. B. (n.d.). Eight-Hour Movement. The Encyclopedia of Chicago. Retrieved from http://www.encyclopedia.chicagohistory.org/pages/417.html](http://www.encyclopedia.chicagohistory.org/pages/417.html)
* [National Telecommunications and Information Administration. (n.d.). BroadbandUSA. Retrieved from http://www2.ntia.doc.gov/](http://www2.ntia.doc.gov/)
* [O’Brien, J. (2011, June 24). Apps for Metro Chicago Illinois Competition Launched. Chicago Tonight. Retrieved from http://blogs.wttw.com/moreonthestory/2011/06/24/apps-for-metro-chicago-illinois-competition-launched/](http://blogs.wttw.com/moreonthestory/2011/06/24/apps-for-metro-chicago-illinois-competition-launched/)
* [O’Neil, D. X. (2009, January). Harper Reed: “The power is not the mashup. It’s the data.” Retrieved from http://www.derivativeworks.com/2009/01/h.html](http://www.derivativeworks.com/2009/01/h.html)
* [O’Neil, D. X. (2006, February 18). History of Citizen ICAM. Retrieved from http://www.derivativeworks.com/2006/02/history_of_citi.html](http://www.derivativeworks.com/2006/02/history_of_citi.html)
* [Open Gov Hack Night. (n.d.). Open Gov Hack Night Registration, Chicago. Retrieved from http://opengovhacknight.org/](http://opengovhacknight.org/)
* [Open Government Chicago(-land). (2013). Open Government Chicago(-land). Retrieved from http://www.meetup.com/OpenGovChicago/](http://www.meetup.com/OpenGovChicago/)
* [Open Government Working Group. (2007, December 8). 8 Principles of Open Government Data. Retrieved from https://public.resource.org/8_principles.html](https://public.resource.org/8_principles.html)
* [Rich, T. F., National Institute of Justice. (1996). The Chicago Police Department’s Information Collection for Automated Mapping (ICAM) Program. Retrieved from https://www.ncjrs.gov/pdffiles/icamprog.pdf](https://www.ncjrs.gov/pdffiles/icamprog.pdf)
* [Sifry, M. L. (2009, January 15). A See-Through Society. Columbia Journalism Review, January/February 2009. Retrieved from http://www.danielxoneil.com/2009/01/15/columbia-journalism-review-a-see-through-society/](http://www.danielxoneil.com/2009/01/15/columbia-journalism-review-a-see-through-society/)
* [Smart Chicago Collaborative. (n.d.). Civic User Testing Group. Retrieved from http://cutgroup.smartchicagoapps.org/](http://cutgroup.smartchicagoapps.org/)
* [Wade, Louise Carrol (2004). “Settlement Houses.” Encyclopedia of Chicago. Chicago Historical Society. Retrieved from http://www.encyclopedia.chicagohistory.org/pages/1135.html](http://www.encyclopedia.chicagohistory.org/pages/1135.html)
