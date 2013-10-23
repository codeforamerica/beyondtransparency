---
layout: chapter
title: "Towards a Community Data Commons"
chapter: 19
part: 5
author: 
  - 
    name: Greg Bloom
    twitter: greggish
    job: Communtiy Organizer
    employer: Freelance Futurist
    photo_url: /images/authors/greg.png
    about: "Cooperative developer, researching commons-based approaches to community wealth-building."

permalink: /part-5/towards-a-community-data-commons/
---
### The Front Line

Bread for the City is one of Washington D.C.’s largest and most comprehensive providers of human services: an institution nearly four decades old, with four departments offering dozens of services—health care, legal counsel, food provisions, social workers, and the “Bread Boutique” clothing room to boot—in two facilities on opposite sides of the city. About thirty-two thousand people walk through Bread for the City’s doors each year, but out of all of these “walk-ins,” only around twelve thousand people actually become “clients.” The rest may need services that are provided elsewhere, at other non-profits or public agencies, and Bread for the City’s social workers redirect them accordingly.

Finding accurate referral information—specifically, what services are provided where, when, and for whom—takes up hours of these social workers’ time each week. In any given week, somewhere in the city, a new program is launching, or changing its hours or its eligibility requirements, or moving, or shutting down. There aren’t any common channels through which this information is shared with the public—if it’s shared publicly at all. So Bread for the City’s social workers built a Microsoft Access database to track hundreds of organizations and over 1,500 services. People trust Bread for the City, and many come to the organization to get these referrals, as they wouldn’t know where else to find reliable information.

Occasionally, outside parties have asked Bread for the City for a copy of its data to use in some kind of directory databasing initiative. The organization is unusually willing to share. After all, if someone else can make use of their data, then perhaps more people will find more direct routes to the help they need, saving them time and achieving better outcomes, making it that much easier for social workers to provide direct assistance to those whom they can help.

For nearly five years, I led communications for Bread for the City. During that time, I blogged occasionally about these directory initiatives. Once I started looking, I found them all over the place. A typical project would collect some data, put up a website or a Google Maps layer or a printable PDF, then stall out. New ones would keep coming. Even the D.C. government has more than a dozen different resource directories scattered across its many agencies, often in Excel or Microsoft Word and hopelessly out of date.

Eventually, I started gathering participants from these initiatives together to discuss what we came to call “the community resource directory data problem.” In these conversations, my guiding questions were: how can we actually work together to solve this problem? How could Bread for the City’s knowledge be pooled with knowledge from other sectors? What would be in the best interests of the struggling D.C. residents who might benefit from this information?

### The Long Fail 

We were far from the first to ask these questions.

Indeed, the “community resource directory problem” has been around nearly as long as there have been professionalized services that one might call “community resources.” Before the digital era, in most communities you’d likely find at least one organization (such as an agency like Bread for the City, or a church, or a library) in which someone would labor to compile, print, and circulate such a directory every year or so. As the sector grew, the number of directories proliferated, and as early as the 1970s, the field of “information and referral” (I&R) formally emerged (Williams and Durrance, 2010).

In our “D.C. community resource directory” conversations, one of the regular participants had helped launch a citywide I&R initiative back in the mid-90s. Their plan was to build a “master directory” that would be accessible through computer kiosks in agencies and community centers throughout the city. Technologically, their plan may have been overly ambitious, but it was politics that ultimately brought this initiative down. Another large local organization had received funding to produce a resource directory, and it moved aggressively to protect its turf. The resulting struggle over who would own this data sapped the will of the coalition. The database was handed over to the local government, which did not really commit to sustaining it. So the D.C. public I&R system never became widely used, and the quality of its data decayed rapidly. Eventually, it was more or less forgotten.

A decade later, we would ask for this data back. In 2012 and 2013, with the help of the local Code for America Brigade (and no small amount of arm-wrestling among community partners), we managed to consolidate I&R data from the D.C. government, Bread for the City, and several other resource directory datasets into one master directory. We assigned a unique identifier to each organization in this directory, by which every contributing system can now recognize the data from the other systems. And we hosted it in a cloud catalog as open data, freely available for any application to query via an Application Programming Interface (API).

Technologically, this was actually pretty easy to accomplish—and it would not have been possible fifteen years ago, maybe not even five. We’ve reached a level of technical interoperability that makes it unnecessary to struggle over questions like whose server will host the data, and how the data will be delivered to which users. The answer can be “openly.”

But this answer only gets us so far. It really only makes it possible for us to ask new kinds of questions, starting with: what should a twenty-first century “information and referral system” look like? 

### The 211 Legacy

Today, most official I&R systems still look like they did in the late twentieth century. Specifically, they look like 211—the nationally designated solution to the community resource directory problem. In most places in the country, you should be able to pick up a phone, dial 211, and request a referral from a call center specialist who supposedly has at their fingertips all the relevant information about local health, human, and social services. 

211, however, is not one single system. It is actually a federated, decentralized network. More than two hundred 211s operate independently across the United States and Canada. Each 211 is shaped by the institutional landscape of its particular area. Some are run by local governments, most are independent 501(c)(3)s, and many are run (or funded) by the local United Way. 

The United Way was the driving force behind 211’s initial development. As a non-profit clearinghouse for charitable donations and volunteers, the United Way was one of the sector’s best sources of directory information. It moved aggressively to “add value” to this data by securing contracts for the operation of 211 services around the country.

Today, many 211s appear to possess the best I&R data available in their communities. They dedicate considerable human resources to maintaining that data, and to maintaining the associated contracts (from government, local foundations, etc.) to deliver the data. But these 211 systems emerged just in time for the technologies they were built upon to start to slide into obsolescence, and they haven’t changed much since. 211 systems are basically pre-Web 2.0. The network is only recently starting to consider the prospects of smart mobile applications. These are very much “closed” platforms, and there isn’t any one governing body that can make the decision to open them up.

This was where we found an odd local advantage at our table in D.C. The city’s 211 system, which is operated by the local government, had long been one of the least active systems around. The D.C. government had never invested in it, and the initiative languished. Eventually, we asked the city to hand the data over, and they readily complied. Despite the lousy quality of D.C.’s 211 data, we hoped that ”opening” it would yield a clear path toward the development of an innovative, “community-based” I&R system. In retrospect, we were naïve about how big of a challenge this would be.

### The Civic Technologists

To understand the particularly elusive nature of this problem, consider the contrast between Open211 and its more successful and popular cousin, Open311.

311 is a municipally-run calling system through which residents can both request information about public services and also report non-emergency problems that a city deals with, such as filling potholes or cleaning up vermin infestations.

Open311 is a set of protocols that standardizes the data types and flows of 311 systems, and “opens” them up via an API. This enables external applications to read from and even write to a city’s 311 system. The resulting flurry of Open311-related innovation hasn’t just expanded the number of ways in which you can use 311—it has actually shifted the paradigm around that use, from private interaction between individual and agency to public participatory engagement.

But Open311 had a clear path to success: municipal agencies may be siloed and sluggish, but because they are still part of one big system, a single point of leverage (say, the Mayor’s office) can actually bring them all in line. An attempt to replicate this success with Open211 faced the more elusive challenge of “opening” data produced about and by non-governmental organizations.

Open211 launched in 2011, during the inaugural round of Code for America (CfA) fellowships. Having decided to take on the community resource directory data problem, a Bay Area-based CfA team discovered that their region’s 211 had neither an API, nor an interest in building an API, or really sharing its data in any way. So their Open211 project (originally called “the Redirectory”) actually bypassed the challenge of “opening” 211, and instead started from scratch. The team exported and scraped directory data from every source they could find, including government agencies, community directories, and Google. Then they imported this hodgepodge of data into a lightweight application that could display results on a simple mapping interface, print out referrals, send geo-targeted referrals via text messages, and receive user-submitted data that would expand and organize its listings. 

This last part was key: Open211 not only enabled users to create and improve their community’s resource directory data themselves, it was counting on them to do so. But the crowd didn’t come. The team tried to recruit and train non-profits to use it, without much success. If people’s hands weren’t held through the process, the app just didn’t get used. At the end of the yearlong fellowship program, the source code for the Open211 project was posted publicly on GitHub, a website for collaborative software development, but otherwise abandoned. 

During interviews with several 211 administrators, I heard them predict precisely this outcome. The most effective 211s hire a team of researchers who spend their time calling agencies to solicit and verify their information. They might also send emails and letters to agencies requesting that they update their data themselves, but this doesn’t yield great results. Someone at an agency will probably answer a phone call, but relatively few will log in or print and mail a form. There are lots of reasons for this. Requests get lost in the incoming flood. The task may not fall under any given staffer’s responsibilities, or within their technical abilities. Many organizations will only respond to someone they trust. And for some organizations, making their service information more widely known just isn’t a priority.

This all points to a question that the civic technology movement must consider: whose responsibility is it to produce and share knowledge about a community?

### The Startups

Many social service agencies (especially ones that are smaller and less resourced than Bread for the City) still rely on analog referral systems such as binders full of handwritten lists of nearby services. A slew of startups have recently emerged to offer more efficient technology solutions that address this this need.

For instance, the Austin-based Aunt Bertha offers software that streamlines and digitizes the process of intake, relieving social workers and clients of great headaches of paperwork. In doing so, Aunt Bertha collects and publishes information about which organizations do what for whom. Another organization, Idealistics, produced software that helps case managers manage their cases, analyzes the data that they input, and suggests possible services to which their clients might be referred, much like ads in Gmail. A third entrant is Purple Binder (based in Chicago, the only major metropolitan area in the country to lack a 211 system of any kind), which offers social workers an appealing interface for the organization of their referral options.

These are for-profit companies that charge for their products, but even a cash-strapped non-profit will pay for software if it actually helps its social workers do their jobs better. And if the software helps social workers do their jobs better, the social workers will produce quality referral data. In this way, these startups are not only demonstrating that there is a market for new I&R solutions—they are also pointing toward a new paradigm for I&R, one that blurs the line between the producers and users of community resource data.

It’s worth noting the irony that this wave of innovation has produced three separate solutions to the three different links in the social service pipeline—intake, case management, and referral—each with its own approach, which may be incompatible with the others. When I remarked upon this fragmentation to one of the entrepreneurs, he answered that this is how the market works: the best solutions will bubble up and scale. But it’s worth considering that the market sometimes yields outcomes that are efficient for elites and institutions, yet not actually effective for most people or their ecosystems.

In a brief span of time, these startups have developed the kinds of sophisticated software for that have long been overdue in this sector. But are they truly solving the community resource directory data problem, or merely building business models around the problem’s symptomatic pain points? If these startups evolve into yet another class of intermediaries, institutionally committed to protect their hold on data about our communities, the real problem—which is that communities lack effective means to produce and share their own information—may only be recreated and entrenched.

Given that the social sector itself grows around the miseries of cascading market failures, a truly transformative solution may require us to forge new patterns of social organization and resource allocation—in which, for instance, the competitive advantages of entrepreneurs are complementary values balanced against that of the common good.

### The Vision 

Before seeking a path forward, let’s first imagine a world in which the “community resource directory data problem” has been truly solved:

A social worker doing intakes on a tablet is able to reference the same data that is displayed on a single mother’s phone as she scans through emergency shelter options; this same data is queried by a directory application for which area librarians are trained to offer hands-on technical assistance for their patrons; a journalist sees this same data while researching city contracts; FEMA accesses this data during a crisis; a community planning consortium sees the data in its mapping tools. All of these instances involve different applications, and each of these applications might solicit its own kind of feedback, which can update, qualify, and expand the common data pool. And this shared knowledge about the services available in a community is combined with other shared knowledge bases—about the money flowing into and out of these services, about the personal and social outcomes produced by the services, etc.—to be understood and applied by different people in different ways throughout this ecosystem as a collective wisdom about the “State of Our Community.”

When only considering the data and technology involved, this vision is not so far from reality. Given the technical interoperability made possible by APIs and the cloud, and gradual developments toward data interoperability in the social sectors, it is quite technologically feasible. But actually achieving it would require vast improvements in what Palfrey and Gasser (2012) refer to as the other half of the “layer cake” of interoperability: institutional interoperability, by which data can be exchanged across organizational boundaries, past barriers of law, policy, and culture; and human interoperability, by which people can understand and act upon this data. To really make progress toward human interoperability, we have to traverse the terrain of institutional interoperability—and there we encounter a messy case of the tragedy of the commons.

### The Commons

A “commons” is a resource that is shared—and because it can be hard for people to share things, a commons is inherently subject to various social dilemmas. 

Community resource directory data itself is a commons. It’s public information, freely available, but unaggregated in its natural state. This data is abundant, and it can be used in many different ways, yet it is also nonrivalrous—meaning my use of it does not diminish your ability to use it. But when aggregated, it also decays, and it is costly to maintain. So the data is usually collected by organizations that organize it to narrowly serve their specific objective or earn a return on investment. This tends to render their data inaccessible or uninteroperable with other kinds of data.

To some extent, we can start to solve these problems by opening data, standardizing it, and developing free and open source software that can use it. But those steps alone do not address the various misalignments between costs and incentives, institutions and people, private agendas and the common good.

Consider our consolidated D.C. community resource database and the code for Open211. Both of these are publicly available on GitHub. They are “free” as in speech (anyone can see, use, and adapt the source code, and likewise the data). They are also, as the saying commonly goes, “free” as in beer (you will not be charged to use them, and that’s nice), but it would be more apt to invoke the less common saying—that they are “free” as in puppies: someone will have to feed them, train them, and deal with the mess. The tragedy of the commons includes a multitude of these “abandoned puppies.”

The tragedy of the commons, however, is far from inevitable. So far, we have considered commons that are unowned and ungoverned—“libertarian commons,” Peter Levine (2003; 2007) calls them, in which anyone is free to do anything they want with an open resource. Yet this is not the only possible kind of commons. We have many well-established precedents for commons that are effectively owned, managed, and governed by those who benefit from them and collectively agree to act in ways that protect and sustain them over time. Successful arrangements of commons management take many forms, each shaped according to the unique properties of the resource, its users, and its place. Such strategies are often demonstrably superior to privatization or government regulation, because shared, localized control can better manage complexity and ensure accountability (New America Foundation, 2001; Ostrom & Hess, 2007).

In the specific context of understanding knowledge as a commons, Levine (2007) counters his description of the oft-tragic “libertarian commons” by proposing the development of “associational commons,” through which an organizational mechanism can align diverse perspectives and interests, and establish various kinds of shared responsibilities. An associational commons consists not just of the resource itself (the open field of grass, or the open set of data) but also the synthesis of that resource with the web of social relationships that form around it. Wikipedia, for instance, contains both informal and formal layers of commons management: an association of editors who have special privileges over content, and an official organization that is responsible for fundraising and operations.

So we can imagine a triumphant community resource directory data commons, forged of a layered set of agreements about how shared data will be produced, managed, and used, among heterogeneous systems and for diverse purposes.

To establish and sustain this kind of commons, we will need to practice what Alexis de Tocqueville (1840) once described as the uniquely American “art and science of association,” Theda Skocpol (2004) more recently described as “the democratic arts of combination,” and Peter Linebaugh (2008) has identified simply as acts of “commoning.”

### The Cooperative Advantage

If the responsibility to (re)produce knowledge about a community is shared but diffuse, and if the output of organized production is to be truly free (as in speech and beer and, yes, puppies) then we will require some kind of mechanism for collective action, through which the resources (skills, time, money, data, knowledge) necessary to build and maintain the community resource data commons can be pooled.

For this purpose, at least at our table in D.C., I have explored the development of a community data cooperative.

A cooperative entity is owned and governed by its members. (Many co-ops are stores owned by their patrons; some co-ops are owned by their workers; cooperative housing property is owned by its tenants.) To survive, a co-op must be economically viable, just like any other entity in its field. The difference is that a co-op’s decision-making process involves the democratic participation of people who have the greatest stake in its outcome, and as members they agree to equitably share in its various burdens, benefits, and responsibilities.

A “community data co-op” could serve a variety of stakeholders: foundations, local non-profits and other community anchors, possibly I&R vendors, conceivably even libraries and government agencies. (A co-op may include different classes of membership with different privileges and responsibilities; presumably, the primary class of members would consist of front-line workers who actually make referrals on a day-to-day basis.) Each stakeholder stands to benefit from a cooperative solution, and also has something valuable to contribute to the commons.

The challenge of cooperative development will be to successfully align these assets and interests through a set of reciprocal agreements. As such, the co-op might consist of three primary roles. 

First, a co-op would organize the means of production of the “common data pool.” So far, we’ve seen several different methods of producing this data: trained researchers can extract it; mass emails and letters can solicit it; front-line workers can generate it themselves as they do the work of making referrals. It can also be gleaned from IRS records, scraped from the web, or even required by funders. A cooperative strategy could integrate any of these tactics, aligning it all according to a common set of standards. And since—for the foreseeable future, anyway—verification of this data still requires the touch of human intelligence, the best solution may be one that directly involves those with first-hand knowledge of the field. This might even be the primary responsibility of membership in the co-op: instead of paying dues in cash, members could contribute their time to data management (time that is currently being spent ineffectively, to duplicative ends).

Second, the co-op could facilitate the circulation of this data through an ecosystem of services—including the internal systems of members like Bread for the City, open systems like Open211, and the enterprise-level systems of vendors like Aunt Bertha, Purple Binder, and even 211. Though the data would be open source, the co-op may require a license for commercial use and other kinds of premium services—presumably costing less than whatever the vendors would otherwise spend to collect the data themselves. Vendors could then reallocate their resources toward the development of services that add value to this data.

Third, the co-op would foster education. Cooperatives are committed to education as one of their core principles, and given that the data produced by this co-op would presumably be “open,” education may be the primary benefit of membership: access to an array of opportunities for personal skill-building and organizational learning—anything from hands-on tech support to generalized data literacy training. 

Writing recently about the patterns of community technology development, Michael Gurstein (2013) called for innovation to be something that “is done by, with and in the community and not simply something that is done ‘to’ or ‘for’ the community.” This may be such a strategy: generating community resource data through the generation of resourceful community. As such, a cooperative solution may not only yield better data—it is also likely to yield more effective use. Whereas Open311 demonstrates the paradigm that Tim O’Reilly famously dubbed “government as platform,” here we can point to its corollary precept, community as platform, in which technology is not something that is made for people to consume, but rather made by people to share.

### The Path Ahead

Now may be the right time to undertake a new approach to this problem. Several organizations have recently proposed new ways to enable the free and open circulation of interoperable community resource data. However, to achieve the promise of open data, we face challenges that are more political than technical.

As we do so, however, some essential questions have yet to be addressed:

* How might open, standardized community resource data be valuably synthesized with other kinds of knowledge bases—such as those used in crisis response, community needs assessment, philanthropy, or policy analysis?
* What is the proper role for government in the production and dissemination of data about the social sector? What about other community anchor institutions, such as libraries and schools?
* And finally, how can this work be grounded by the experiences and prerogatives of those with the greatest stake in its outcome: people in need?

The commoning path will require commitment, imagination, trust, and accountability. It almost goes without saying that this will be hard work; it may also simply be the right work to do.

### About the Author

Greg Bloom was the Communications Guy at Bread for the City in Washington D.C. from 2008 to 2012. His recent work focuses on digital justice in D.C., including the development of community wireless networks and DiscoTechs (Discovering Technology Fairs). He is a founding member and “Chief Reality Officer” of Code for D.C., a volunteer civic hacking group, and he was lead organizer for Hack for D.C. during the 2013 National Day of Civic Hacking. Greg is a proud new member of CooperationWorks, and soon to be certified by its Cooperative Business Development Program (pending successful completion of an Excel test that he’s pretty worried about, as he hardly knows anything about actually working with data). This research was made possible by a fellowship with Provisions Library, a residency at Elsewhere, the support of the Ralph K Morris Foundation, and lots of people who were generous with their time, brains, and/or couches. Supplemental research, commentary, and proposal will be published at gregbloom.org and communityresourcedata.codefordc.org.

### References 

* [Alliance of Information and Referral Systems (2009). AIRS standards for professional information & referral and quality indicators. Retrieved from http://www.airs.org/files/public/AIRS_Standards_6_0Final.pdf](http://www.airs.org/files/public/AIRS_Standards_6_0Final.pdf)
* [Ashlock, P. (2012). Open & Candid: Phil Ashlock on Open311. Retrieved from http://openplans.org/2012/02/open-candid-phil-ashlock-on-open311/](http://openplans.org/2012/02/open-candid-phil-ashlock-on-open311/)
* [The Aspen Institute. (2013). Information for Impact: Liberating Non-Profit Sector Data, in Aspen Institute’s Program on Philanthropy and Social Innovation. Washington, DC: Beth Simone Noveck and Daniel L. Goroff. Retrieved from http://www.aspeninstitute.org/sites/default/files/content/docs/events/psi_Information-for-Impact.pdf](http://www.aspeninstitute.org/sites/default/files/content/docs/events/psi_Information-for-Impact.pdf)
* Fitch, D. (2009). Shared point of access to facilitate interagency collaboration. Administration in Social Work, Vol. 33 (No. 2).
* Gasser, U. & Palfrey, J. (2012). Interop. New York, NY: Basic Books.
* Gurstein, M. (2003). Effective use: A community informatics strategy beyond the Digital Divide. First Monday, 8.12. Retrieved from: http://firstmonday.org/ojs/index.php/fm/article/view/1107/1027
* Gurstein, M. (2013). Community Innovation and Community Informatics. The Journal of Community Informatics, Vol. 9 (No. 3).
* Levine, P. (2003). A Movement for the Commons? The Responsive Community: Rights and Responsibilities, vol. 13. Retrieved from: http://www.peterlevine.ws/responsivecommunity.pdf
* Levine, P. (2007). Collective Action, Civic Engagement, and the Knowledge Commons. In E. Ostrom and C. Hess (Eds), Understanding Knowledge as a Commons (247). Cambridge, MA: MIT Press. 
* [Montero, M. (2013) Social Consortium: A Partnership of Community Agents. Global Journal of Community Psychology Practice, Vol. 4 (No 2). Retrieved from http://www.gjcpp.org/pdfs/Montero-v4i2-20130531.pdf ](http://www.gjcpp.org/pdfs/Montero-v4i2-20130531.pdf )
* [Nadeu, E.G. (2012). The Cooperative Solution. Retrieved from http://www.thecooperativefoundation.org/images/Cooperative_Solution_6x9-h_copy.pdf](http://www.thecooperativefoundation.org/images/Cooperative_Solution_6x9-h_copy.pdf)
* [New America Foundation. (2001). Public Assets, Private Profits: Reclaiming the American Commons in an Age of Market Enclosure. Washington DC: David Bollier. Retrieved from http://www.newamerica.net/files/archive/Pub_File_650_1.pdf](http://www.newamerica.net/files/archive/Pub_File_650_1.pdf)
* [Ogden, M (2012, January). Open211 [Weblog]. Retrieved from http://maxogden.com/open211.html](http://maxogden.com/open211.html)
* Ostrom, E. & Hess, C. (Eds.). (2007). Understanding Knowledge as a Commons — From Theory to Practice. Cambridge, MA.: MIT Press.
* [Peuter, G. & Dyer-Witheford, N. (2010). Commons and Cooperatives. Affinities: A Journal of Radical Theory, Culture, and Action, Vol. 4 (No 1). Retrieved from http://affinitiesjournal.org/index.php/affinities/article/view/45](http://affinitiesjournal.org/index.php/affinities/article/view/45)
* Skocpol, T. (2004). Diminished Democracy: From Membership to Management in American Civic Life. Norman, OK: University of Oklahoma Press.
* Shank, N. (2004). Database Interoperability: Technology and Process for Sharing Resource Information. Journal of Alliance and Information Referral Systems 2004. See http://digitalcommons.unl.edu/publicpolicyshank/1/
* [De Tocqueville, A. (1840). Democracy in America. Retrieved from http://www.gutenberg.org/ebooks/816](http://www.gutenberg.org/ebooks/816)
* [Williams, K. & Durrance, J. (2010). Community Informatics. The Encyclopedia of Library and Information Sciences, Vol. 3. Retrieved from http://people.lis.illinois.edu/~katewill/williams-durrance-encyclo-community-informatics.pdf](http://people.lis.illinois.edu/~katewill/williams-durrance-encyclo-community-informatics.pdf)
