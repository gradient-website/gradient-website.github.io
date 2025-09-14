import React from 'react';
import { Button } from '../ui/button';
import { MailingListForm } from '../MailingListForm';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-6xl text-gray-900 mb-6">
              Gradient
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Fostering Academic Excellence Through Innovation
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700">
              Gradient is a premier academic association dedicated to developing challenging Olympiads 
              and organizing JunctionX events that push the boundaries of educational excellence. 
              We create opportunities for students, educators, and institutions to collaborate, 
              innovate, and achieve their highest potential.
            </p>
          </div>

          <MailingListForm variant="hero" />
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Academic Olympiads</h3>
              <p className="text-gray-600">
                Developing comprehensive Olympiad programs that challenge students 
                and promote excellence in various academic disciplines.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-900 mb-3">JunctionX Events</h3>
              <p className="text-gray-600">
                Organizing innovative JunctionX events that bring together 
                students, professionals, and industry leaders for collaborative learning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Institutional Partnerships</h3>
              <p className="text-gray-600">
                Building strong partnerships with educational institutions, 
                sponsors, and organizations to expand our impact and reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-gray-900 mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our programs, connect with our community, and discover how Gradient 
            can help you achieve academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('about')}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8 py-3"
            >
              Learn More About Us
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('events')}
              className="px-8 py-3 border-gray-300 hover:bg-gray-50"
            >
              View Our Events
            </Button>
          </div>
        </div>
      </section>

      {/* Mailing List Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <MailingListForm />
        </div>
      </section>
    </div>
  );
}