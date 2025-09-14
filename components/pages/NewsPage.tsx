import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { MailingListForm } from '../MailingListForm';

export function NewsPage() {
  const newsArticles = [
    {
      title: "Record-Breaking Participation in Mathematics Olympiad 2024",
      date: "September 12, 2024",
      category: "Events",
      excerpt: "Over 850 students from 25 countries participated in our largest Mathematics Olympiad to date, showcasing exceptional problem-solving skills and mathematical creativity.",
      content: "This year's Mathematics Olympiad exceeded all expectations with record-breaking participation and outstanding performance levels. The competition featured challenging problems across algebra, geometry, number theory, and combinatorics, designed by our expert panel of mathematicians.",
      author: "Dr. Sarah Chen",
      readTime: "3 min read"
    },
    {
      title: "New Partnership with European Space Agency",
      date: "August 28, 2024", 
      category: "Partnerships",
      excerpt: "Gradient announces strategic partnership with ESA to develop space-themed competitions and provide students with unique opportunities in aerospace engineering.",
      content: "We're excited to announce our new partnership with the European Space Agency, which will enable us to create innovative space-themed challenges and provide students with real-world experience in aerospace technologies.",
      author: "Elena Rodriguez",
      readTime: "4 min read"
    },
    {
      title: "JunctionX Amsterdam 2024: Innovation Highlights",
      date: "August 15, 2024",
      category: "Events",
      excerpt: "Recap of the most successful JunctionX Amsterdam event, featuring groundbreaking projects in AI, sustainability, and social impact technology solutions.",
      content: "JunctionX Amsterdam 2024 brought together 300+ participants who developed incredible solutions over 48 hours. From AI-powered healthcare applications to sustainable energy management systems, the innovation was truly remarkable.",
      author: "Marcus van der Berg",
      readTime: "5 min read"
    },
    {
      title: "Gradient Expands to Latin America",
      date: "July 22, 2024",
      category: "Expansion",
      excerpt: "New regional partnerships established in Brazil, Mexico, and Argentina to bring Gradient's educational programs to Latin American students.",
      content: "Our expansion into Latin America marks a significant milestone in Gradient's mission to provide world-class educational opportunities globally. We've established partnerships with leading universities in Brazil, Mexico, and Argentina.",
      author: "Dr. James Mitchell",
      readTime: "3 min read"
    },
    {
      title: "AI Ethics Workshop Series Launched",
      date: "July 10, 2024",
      category: "Education",
      excerpt: "New workshop series addressing ethical considerations in artificial intelligence development, featuring industry experts and academic researchers.",
      content: "As AI continues to transform our world, understanding ethical implications becomes crucial. Our new workshop series brings together leading experts to discuss responsible AI development and implementation.",
      author: "Prof. Lisa Wang",
      readTime: "4 min read"
    },
    {
      title: "Alumni Spotlight: Innovation in Healthcare",
      date: "June 18, 2024",
      category: "Alumni",
      excerpt: "Former Gradient participants are making waves in healthcare innovation, developing cutting-edge medical technologies and improving patient outcomes worldwide.",
      content: "We're proud to feature some of our alumni who are revolutionizing healthcare through innovative technologies. Their work demonstrates the lasting impact of Gradient's educational programs.",
      author: "Elena Rodriguez",
      readTime: "6 min read"
    }
  ];

  const upcomingEvents = [
    {
      title: "Winter Physics Olympiad 2024",
      date: "December 15-17, 2024",
      location: "Amsterdam, Netherlands",
      type: "Competition"
    },
    {
      title: "JunctionX Innovation Summit", 
      date: "January 20-22, 2025",
      location: "Virtual Event",
      type: "Hackathon"
    },
    {
      title: "Global Education Conference",
      date: "February 8-10, 2025", 
      location: "Berlin, Germany",
      type: "Conference"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Events': return 'bg-blue-100 text-blue-800';
      case 'Partnerships': return 'bg-green-100 text-green-800';
      case 'Expansion': return 'bg-purple-100 text-purple-800';
      case 'Education': return 'bg-orange-100 text-orange-800';
      case 'Alumni': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-gray-600">
            Stay informed about our latest achievements, events, and community highlights
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">Latest Stories</h2>
            <p className="text-lg text-gray-600">
              Discover what's happening in the Gradient community and beyond
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-12">
            <Card className="border border-gray-200 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-blue-600 p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-4">🏆</div>
                    <h3 className="text-xl mb-2">Featured Story</h3>
                    <p className="text-green-100">Most Recent Update</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-3">
                    <Badge className={getCategoryColor(newsArticles[0].category)}>
                      {newsArticles[0].category}
                    </Badge>
                    <span className="text-gray-500 text-sm ml-4">{newsArticles[0].date}</span>
                    <span className="text-gray-500 text-sm ml-4">• {newsArticles[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-3">{newsArticles[0].title}</h3>
                  <p className="text-gray-700 mb-4">{newsArticles[0].content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {newsArticles[0].author}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.slice(1).map((article, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <span className="text-gray-500 text-xs">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <p className="text-gray-500 text-sm">{article.date} • By {article.author}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-gray-900 mb-8 text-center">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl text-gray-900 mb-2">{event.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m1 0h2a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h2m8 0V7a1 1 0 00-1-1H9a1 1 0 00-1 1v2h8z" />
                          </svg>
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {event.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Archive */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-gray-900 mb-6">Newsletter Archive</h2>
          <p className="text-lg text-gray-600 mb-8">
            Access our complete archive of newsletters, event summaries, and community updates. 
            Stay connected with the Gradient community year-round.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
                  </svg>
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Monthly Updates</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive monthly summaries of events, achievements, and upcoming opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Event Recaps</h3>
                <p className="text-gray-600 text-sm">
                  Detailed coverage of our competitions, hackathons, and special events with highlights.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Community Stories</h3>
                <p className="text-gray-600 text-sm">
                  Inspiring stories from our community members, alumni, and partner organizations.
                </p>
              </CardContent>
            </Card>
          </div>

          <a 
            href="/newsletter-archive"
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg transition-all inline-block"
          >
            Browse Newsletter Archive
          </a>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-gray-900 mb-6">Press & Media</h2>
          <p className="text-lg text-gray-600 mb-8">
            Media professionals and journalists can access our press kit containing logos, 
            fact sheets, and high-resolution images for publication use.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/press-kit.zip"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg transition-all inline-block"
            >
              Download Press Kit
            </a>
            <a 
              href="mailto:press@gradient.org"
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg transition-all inline-block"
            >
              Contact Press Team
            </a>
          </div>
        </div>
      </section>

      {/* Mailing List Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <MailingListForm />
        </div>
      </section>
    </div>
  );
}