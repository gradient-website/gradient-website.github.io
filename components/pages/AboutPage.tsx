import React from 'react';
import { MailingListForm } from '../MailingListForm';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
            About Gradient
          </h1>
          <p className="text-xl text-gray-600">
            Building bridges between academic excellence and real-world innovation
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Gradient is committed to fostering academic excellence through innovative educational programs, 
              challenging competitions, and collaborative events. We believe that by pushing the boundaries 
              of traditional education, we can inspire the next generation of leaders, thinkers, and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl text-gray-900 mb-4">What We Do</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Develop and organize challenging academic Olympiads across multiple disciplines</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Host JunctionX events that connect students with industry professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Create collaborative learning environments for academic growth</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Build partnerships with educational institutions and industry leaders</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl text-gray-900 mb-4">Our Values</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg text-gray-900 mb-2">Excellence</h4>
                  <p className="text-gray-600">
                    We strive for the highest standards in everything we do, from program development to event execution.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-2">Innovation</h4>
                  <p className="text-gray-600">
                    We embrace new ideas and approaches to create unique learning experiences.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-2">Collaboration</h4>
                  <p className="text-gray-600">
                    We believe in the power of working together to achieve greater impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-gray-900 mb-8 text-center">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-medium flex-shrink-0">
                2020
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Foundation</h3>
                <p className="text-gray-600">
                  Gradient was founded by a group of passionate educators and students with a vision to 
                  revolutionize academic competitions and educational events.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-medium flex-shrink-0">
                2021
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">First Olympiad</h3>
                <p className="text-gray-600">
                  Launched our first academic Olympiad, attracting over 500 participants from universities 
                  across the region and establishing our reputation for excellence.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-medium flex-shrink-0">
                2022
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">JunctionX Partnership</h3>
                <p className="text-gray-600">
                  Became an official JunctionX organizer, expanding our reach and creating opportunities 
                  for students to engage with cutting-edge technology and innovation.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-medium flex-shrink-0">
                2024
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Global Expansion</h3>
                <p className="text-gray-600">
                  Today, Gradient serves thousands of students worldwide, partnering with leading 
                  institutions and organizations to create impactful educational experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-gray-900 mb-2">5,000+</div>
              <div className="text-gray-600">Students Reached</div>
            </div>
            <div>
              <div className="text-4xl text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Events Organized</div>
            </div>
            <div>
              <div className="text-4xl text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Partner Institutions</div>
            </div>
            <div>
              <div className="text-4xl text-gray-900 mb-2">15</div>
              <div className="text-gray-600">Countries</div>
            </div>
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