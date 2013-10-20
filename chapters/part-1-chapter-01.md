--- 
layout: chapter
title: "Open Data and Open Discourse at Boston Public Schools"
part: 1
chapter: 1
author: 
  -
    name: Joel Mahoney
    job: Co-Founder
    employer: OpenCounter
    photo_url: /images/authors/joel.jpg
    twitter: joelmahoney
    about: "Joel Mahoney is a civic software architect and entrepreneur. He was a 2011 Fellow at Code for America and is the co-founder of OpenCounter."

permalink: /part-1/open-data-and-open-discource-at-boston-public-schools/
---

> I am a firm believer in the people. If given the truth, they can be depended upon to meet any national crisis. The great point is to bring them the real facts.

> —Abraham Lincoln
		
### Inside the Maze

In March of 2011, the City of Boston had a problem: the *Boston Globe* had just published a special multimedia series titled “Getting In: Inside Boston’s School Assignment Maze” that offered a critical view of Boston’s school assignment policies (*Boston Globe*, 2011). The report profiled thirteen families entering the Boston public school system, and traced their hopes and frustrations as they navigated the complicated school selection process. The following quotes from interviews with the families are indicative:

> I don’t have a lot of faith in the process being logical, so I just hope that in that mess we somehow get something that works out. 

> —Malia Grant

> Just the word ‘lottery’ when it comes to schools—what, you just roll the dice and take a shot with your kid and hope for the best? That’s pretty much where we’re at. 

> —Steve Rousell

> Ultimately, it’s possible that we will leave the city if things don’t work out the way we want them to. 

> —Andy Berg

The report used interactive maps, school performance data, and personal stories to paint a compelling picture of the complexity of the school assignment process. It also showed that the stakes—in terms of citizen satisfaction and trust in government—were high.

These complaints weren’t news to the School Department. The school assignment policies dated back to the Racial Imbalance Act of 1965, which required forced integration in Boston public schools, and provoked riots and protests throughout the city (Hoover Institution, 1998). The opposition was so persistent that it made the cover of Time Magazine in 1971. It led to a District Court ruling in 1974, which found Boston Public Schools to be unconstitutionally segregated, and imposed forced busing on the city to remedy the situation. It wasn’t until busing was abandoned in 1988 that the issue was finally resolved; by that time the school district had shrunk from 100,000 to 57,000 students, only twenty-eight percent of whom were white (Hoover Institution, 1998).

What appeared to be a logistical issue—distributing a large number of students to a limited number of schools—touched on challenging social questions of race, equality, and opportunity. Should diversity be pursued at the expense of neighborhood cohesion? Should desegregation be enforced at a local level when wealthier parents could leave the city? Should cities be responsible for determining the proper balance? As indicated by the Supreme Court’s landmark decision in Brown v. Board of Education in 1954, these questions had a long and contentious history. The simple act of sending a child to school involves some of society’s most divisive issues.

By highlighting the school assignment problem in their 2011 report, the *Boston Globe* brought a longstanding issue back into the public spotlight. The report sparked high-level conversations in City Hall and made it difficult for the School Department to ignore the problem. The criticism demanded a response.

### Coding for America

In January 2011, Code for America began work in Boston as part of an eleven-month engagement with the City. I was part of a five-person Fellowship team tasked with building innovative applications around public education, partnering with The Mayor’s Office of New Urban Mechanics and Boston Public Schools (BPS). Our goal was to make educational services “simple, beautiful, and easy to use,” to quote my teammate Scott Silverman.

Our main project was a “trust framework” that would allow developers to build innovative services on top of student information—a kind of “app store for students.” By the time the *Globe* article was published in March, however, the viability of the project was in doubt: BPS lawyers were taking a conservative stance toward the possibility of opening data, so we shifted our focus to other projects that would be less reliant on open data.

After the Globe report was published, however, we sensed an opportunity to make progress with the city around the sensitive topic of open data. In an early meeting with the School Department, the Superintendent suggested that we build an application to help parents through the school discovery process. We realized that the project would be an excellent opportunity to clarify the eligibility rules in context, especially considering the existing tools—a twenty-eight-page parent handbook, and a home-grown BPS website called “What Are My Schools?”—left much to be desired. In July of 2011, we began work on a project that allows parents to enter a home address and grade level and see a personalized list of eligible schools. We called it “DiscoverBPS.”

Our research showed that parents had two primary concerns: school quality and school location. To address those concerns, we included detailed information on commute distances and times (by foot and by bus), as well as MCAS scores, teacher-to-student ratios, school hours, after-school programs, and other performance metrics. We built “walkshed maps” to help parents make sense of the complicated walk-zone policy (which gave a higher precedence to students who lived within a certain radius of a school), and we added historical acceptance rate data for each grade level in each school. This latter statistic proved to be the most controversial: the School Department worried that the odds of admission would add to the sense of “gambling with your child’s future.” We countered that it was impossible for parents to make informed decisions without relevant information, and that transparent data would make the lottery process more comprehensible. Even after we received permission to publish the data, the School Department thought that the phrase “odds of admission” would be inflammatory, and asked us to refer to the statistic as “applicants per open seat” (which meant that we had to present the number as a ratio instead of a percentage). Apparently, “open data” had shades of grey.

DiscoverBPS launched in November of 2011 and has received upwards of 15,000 unique visitors since then, with a substantial increase in traffic during school registration months. For context, about that same number of people register for school in Boston each year. It won praise from parents and school officials, who felt that the intuitive UI and data-driven content made the complicated school selection process more intelligible. The most significant feedback, however, came a year and a half later, when Superintendent Carol Johnson told me that DiscoverBPS had “changed the way [the School Department] relates to parents.” In thinking about the goals of Code for America—improving citizen engagement by making government services more open, efficient and participatory—I can’t imagine a much higher form of praise.

### Algorithmic Regulation

It is important to note the backdrop for the Superintendent’s remark: I met her at a town hall meeting in February of 2013 where BPS officials were presenting proposals to overhaul Boston’s school assignment policies. These plans had been a topic of discussion for years, but had finally become a reality after Mayor Menino committed to resolving the problem in his “State of the City” speech in January of 2012:

> The Boston Public Schools have come a long way in the last twenty years. When I became mayor, many parents considered sending their children to only a handful of schools. Today, more than 100 of our schools have waiting lists because they are so popular with parents. Our graduation rate has never been higher, and our dropout rate hasn’t been lower in two decades.

> But something stands in the way of taking our system to the next level: a student assignment process that ships our kids to schools across our city. Pick any street. A dozen children probably attend a dozen different schools. Parents might not know each other; children might not play together. They can’t carpool, or study for the same tests. We won’t have the schools our kids deserve until we build school communities that serve them well.

> I’m committing tonight that one year from now Boston will have adopted a radically different student assignment plan—one that puts a priority on children attending schools closer to their homes. I am directing Superintendent Johnson to appoint a citywide group of dedicated individuals. They will help design the plan to get us there and engage the community on this transition.

> I know I have talked about changing the student assignment plan before. We have made many improvements over the years. 2012 will be the year to finish the job. (City of Boston, 2012)

This directive laid out the School Department’s agenda for the next year, including the town hall meetings like the one I attended in February where BPS officials presented the new assignment proposals and solicited feedback from parents. Most of these proposals aimed to solve the busing problem by dividing the school district into smaller assignment zones (see http://bostonschoolchoice.org/explore-the-proposals/original-bps-proposals/). Boston had traditionally consisted of three zones: North, West, and East. The new proposals ranged from nine to twenty-three zones. Like any redistricting effort, there was no easy way to redraw the lines: the number of schools would still be the same, and some parents or groups would always feel short-changed. The meetings were contentious, and parents vented frustrations about the current and proposed assignment systems. And although the Superintendent’s comments were complimentary, when I was sitting in the town hall session, where a long line of parents were venting frustrations about the school selection process it was hard to believe that a website like DiscoverBPS could really have an impact on such deep and intractable problems.

Interestingly, the winning proposal was not on the School Department’s original list. It was submitted by Peng Shi, a doctoral student at MIT studying the use of algorithms to address social problems, who had started attending the town hall meetings out of curiosity. Like us, he came to the conclusion that the problem centered on school quality and location, which he believed were poorly addressed by fixed geographical zones. His solution used an algorithm to ensure that each student had access to a guaranteed number of high-quality choices (as defined by the School Department using test scores and other metrics), no matter where in the city the student lived. According to a *New York Times* article on the topic by Katharine Seelye (2013), “He started saying things like, ‘What I’m hearing is, parents want close to home but they really care about quality… I’m working on something to try to meet those two goals.’ He didn’t have a political agenda.”

Peng proposed his algorithm to the School Department and they included it in their proceedings. Parents were receptive to the idea, and the School Committee eventually voted it into policy in March of 2013 (the algorithm will be put into effect at the end of 2013). The decision was an historic development in a fifty-year debate.

As Seelye’s article noted:

> That it took a dispassionate outsider with coding skills but no political agenda to formulate the model is a measure of the complexities facing urban school districts today. Many such districts, like Boston’s, are plagued by inequities, with too few good schools and children mostly of color trapped in low-performing schools. Overcoming that legacy here has been so emotionally charged that previous attempts to redraw the zones have failed (though in 2005 the district did change the algorithm it uses to assign students). (Seelye, 2013)

This description would have applied equally well to our work in Boston as Code for America Fellows.

### Data and Discourse

The Boston school assignment story shows the power of open data to shift the public discourse around social issues. The Boston Globe made its case against the School Department using data made publicly available by the School Department (along with parent interviews, etc.); the School Department responded by opening up new data in DiscoverBPS, and by engaging in an open dialogue with parents around proposed solutions. This process involved town hall meetings and a website called www.bostonschoolchoice.org, which includes an entire section devoted to “Raw Data.” As Chris Osgood, co-chair of the Boston Mayor’s Office of New Urban Mechanics noted, this data allowed third parties like Peng Shi to make informed contributions to the process. The open data served as a kind of API endpoint into the school selection debate.

The Superintendent’s comment that DiscoverBPS “changed the way [the School Department] relates to parents” reflects the critical role that user-friendly interfaces to open data (such as DiscoverBPS) play in facilitating that discourse.

By changing the way the school department relates to parents, DiscoverBPS also changed attitudes within the school department about the role—and value—of technology. Based on the success of version 1.0 of DiscoverBPS, the City recently retained me to develop version 2.0 of the software, which will include new data and new tools for parents. I am now continuing conversations at BPS that began in 2011, and have noticed a greater tolerance toward the use of open data, as well as toward the tools and technologies that make open data possible (the BPS IT department is currently building a RESTful API to expose a canonical repository of school and student information). Lastly, the School Department’s choice of an assignment policy that can only be administered by a computer strikes me as a hugely symbolic step toward embracing technological solutions—consider what it means that the School Department can no longer pin assignment zone maps on the wall, since the algorithm generates a unique list of eligible schools for each address.

### Conclusion

Our work in Boston shows how open data can catalyze change around even the most contentious social issues. At first, we tried to affect change directly by opening up all student information in an app store, but encountered resistance around privacy issues, and had to take a roundabout approach. By instead applying open data to real and existing problems, we were able to demonstrate the immediate value of the data, and make meaningful contributions to a longstanding public debate.

Two and a half years later, the School Department is investing in the continued development of DiscoverBPS, and is demonstrating a deeper understanding of the role that open data can play in governance.

Democracy relies on our ability to frame policy—and regulation—around our broad societal goals. Open data plays an important role in this process by encouraging constructive public discourse, and by proving a transparent measure of progress towards those goals. Indeed, as Abraham Lincoln noted, with “real facts” even the most challenging social issues can be met.

### About the Author

Joel Mahoney is an entrepreneur and former Code for America Fellow. He is the creator of DiscoverBPS.org, which helps Boston parents to find the best public schools for their kids, and the co-founder of OpenCounter.us, which helps entrepreneurs to navigate business permitting. His work on DataDonor.org explores the use of personal data as a new medium of charitable contribution.

### References

* [Boston Globe Staff (2011). Getting In: Inside Boston’s School Assignment Maze [Multimedia series]. The Boston Globe. Retrieved from http://www.boston.com/news/education/specials/school_chance/index/](http://www.boston.com/news/education/specials/school_chance/index/)
* [City of Boston. (2012). The Honorable Mayor Thomas M. Menino: State of the City Address, January 17, 2012. Retrieved from http://www.cityofboston.gov/Images_Documents/State_of_the_City_2012_tcm3-30137.pdf](http://www.cityofboston.gov/Images_Documents/State_of_the_City_2012_tcm3-30137.pdf)
* [Hoover Institution, Stanford University (1998). Busing’s Boston Massacre. Policy Review, 98. Retrieved from http://www.hoover.org/publications/policy-review/article/7768](http://www.hoover.org/publications/policy-review/article/7768)
* [Seelye, Katherine Q. (2013, March 12). No Division Required in This School Problem. The New York Times. Retrieved from http://www.nytimes.com/2013/03/13/education/no-division-required-in-this-school-problem.html?_r=0](http://www.nytimes.com/2013/03/13/education/no-division-required-in-this-school-problem.html?_r=0)
