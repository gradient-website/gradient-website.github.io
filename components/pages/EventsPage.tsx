import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MailingListForm } from '../MailingListForm';

export function EventsPage() {
  const olympiads = [
    {
      title: "Mathematics Olympiad 2024",
      date: "March 15-17, 2024",
      description: "Advanced mathematical problem-solving competition featuring algebra, geometry, number theory, and combinatorics.",
      status: "Completed",
      participants: "850+",
      videoLink: "https://youtube.com/watch?v=example1"
    },
    {
      title: "Computer Science Olympiad",
      date: "April 20-22, 2024",
      description: "Programming challenges, algorithm design, and computational thinking competitions.",
      status: "Completed", 
      participants: "650+",
      videoLink: "https://youtube.com/watch?v=example2"
    },
    {
      title: "Physics Olympiad 2024",
      date: "October 15-17, 2024",
      description: "Theoretical and experimental physics challenges testing understanding of fundamental principles.",
      status: "Upcoming",
      participants: "Registration Open",
      videoLink: null
    }
  ];

  const junctionXEvents = [
    {
      title: "JunctionX Amsterdam 2024",
      date: "May 10-12, 2024",
      description: "48-hour hackathon focused on sustainable technology solutions and social impact projects.",
      status: "Completed",
      participants: "300+",
      theme: "Sustainability & Impact",
      videoLink: "https://youtube.com/watch?v=junction1"
    },
    {
      title: "JunctionX Innovation Summit",
      date: "September 5-7, 2024", 
      description: "Connecting students with industry leaders through workshops, networking, and collaborative projects.",
      status: "Completed",
      participants: "450+",
      theme: "Future Technologies",
      videoLink: "https://youtube.com/watch?v=junction2"
    },
    {
      title: "JunctionX Winter Edition",
      date: "December 12-14, 2024",
      description: "Year-end hackathon bringing together the best minds in technology and innovation.",
      status: "Upcoming",
      participants: "Registration Open",
      theme: "AI & Machine Learning",
      videoLink: null
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Our Events
          </h1>
          <p className="text-xl text-gray-600">
            Discover our comprehensive range of academic competitions and innovative gatherings
          </p>
        </div>
      </section>

      {/* Academic Olympiads Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">Academic Olympiads</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Olympiads challenge students to push their academic boundaries through 
              rigorous competitions designed to test knowledge, creativity, and problem-solving skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {olympiads.map((event, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      event.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{event.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {event.participants} participants
                    </span>
                    {event.videoLink && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(event.videoLink, '_blank')}
                      >
                        Watch Highlights
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* JunctionX Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">JunctionX Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              JunctionX events bring together students, professionals, and innovators for intensive 
              collaborative experiences that bridge the gap between academia and industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {junctionXEvents.map((event, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      event.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="text-sm text-blue-600 font-medium">{event.theme}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {event.participants} participants
                    </span>
                    {event.videoLink && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(event.videoLink, '_blank')}
                      >
                        Event Recap
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-gray-900 mb-8 text-center">Resources & Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Video Library
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Access recordings of past events, competition highlights, and educational content 
                  from our extensive video library.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                  onClick={() => window.open('https://youtube.com/@gradient', '_blank')}
                >
                  Visit YouTube Channel
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Study Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Download preparation guides, sample problems, and study resources 
                  to help you excel in our competitions.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('/resources/study-materials.pdf', '_blank')}
                >
                  Download Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-gray-900 mb-6">
            Ready to Participate?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of students who have challenged themselves through our events. 
            Stay updated on upcoming competitions and registration dates.
          </p>
          <Button 
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8 py-3 mr-4 mb-4"
            onClick={() => window.open('mailto:events@gradient.org', '_blank')}
          >
            Get Event Updates
          </Button>
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