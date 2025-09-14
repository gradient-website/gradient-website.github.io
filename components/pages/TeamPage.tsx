import React from 'react';
import { Card, CardContent } from '../ui/card';
import { MailingListForm } from '../MailingListForm';

export function TeamPage() {
  const coreTeam = [
    {
      name: "Dr. Sarah Chen",
      role: "Executive Director",
      background: "PhD in Mathematics, Former IMO Gold Medalist",
      description: "Leading Gradient's strategic vision and academic excellence initiatives.",
      initials: "SC"
    },
    {
      name: "Prof. Marcus van der Berg",
      role: "Academic Director",
      background: "Professor of Computer Science, TU Delft",
      description: "Overseeing curriculum development and academic partnerships.",
      initials: "MB"
    },
    {
      name: "Elena Rodriguez",
      role: "Events Director",
      background: "MSc in Education, Junction Alumni",
      description: "Managing all event operations and student engagement programs.",
      initials: "ER"
    },
    {
      name: "Dr. James Mitchell",
      role: "Technology Director",
      background: "PhD in Computer Engineering, Former Google",
      description: "Leading technical infrastructure and innovation initiatives.",
      initials: "JM"
    }
  ];

  const academicBoard = [
    {
      name: "Prof. Dr. Anna Kowalski",
      role: "Mathematics Advisor",
      institution: "University of Amsterdam",
      initials: "AK"
    },
    {
      name: "Prof. Robert Thompson",
      role: "Physics Advisor", 
      institution: "Imperial College London",
      initials: "RT"
    },
    {
      name: "Dr. Lisa Wang",
      role: "Computer Science Advisor",
      institution: "Stanford University",
      initials: "LW"
    },
    {
      name: "Prof. Marie Dubois",
      role: "International Relations",
      institution: "École Polytechnique",
      initials: "MD"
    }
  ];

  const studentAmbassadors = [
    {
      name: "Alex Johnson",
      role: "Student Ambassador",
      university: "University of Amsterdam",
      background: "Mathematics & Computer Science",
      initials: "AJ"
    },
    {
      name: "Maya Patel",
      role: "Student Ambassador",
      university: "TU Delft",
      background: "Aerospace Engineering",
      initials: "MP"
    },
    {
      name: "Thomas Müller",
      role: "Student Ambassador",
      university: "ETH Zurich",
      background: "Physics",
      initials: "TM"
    },
    {
      name: "Sophie Laurent",
      role: "Student Ambassador",
      university: "École Polytechnique",
      background: "Applied Mathematics",
      initials: "SL"
    },
    {
      name: "David Kim",
      role: "Student Ambassador",
      university: "MIT",
      background: "Computer Science",
      initials: "DK"
    },
    {
      name: "Isabella Santos",
      role: "Student Ambassador",
      university: "Universidad Politécnica de Madrid",
      background: "Industrial Engineering",
      initials: "IS"
    }
  ];

  const TeamSection = ({ 
    title, 
    members, 
    columns = "md:grid-cols-2 lg:grid-cols-2" 
  }: { 
    title: string; 
    members: any[]; 
    columns?: string;
  }) => (
    <div className="mb-16">
      <h2 className="text-3xl text-gray-900 mb-8 text-center">{title}</h2>
      <div className={`grid grid-cols-1 ${columns} gap-6`}>
        {members.map((member, index) => (
          <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-lg">{member.initials}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  {member.background && (
                    <p className="text-sm text-gray-600 mb-3">{member.background}</p>
                  )}
                  {member.institution && (
                    <p className="text-sm text-gray-600 mb-3">{member.institution}</p>
                  )}
                  {member.university && (
                    <p className="text-sm text-gray-600 mb-3">{member.university} • {member.background}</p>
                  )}
                  {member.description && (
                    <p className="text-gray-700">{member.description}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-600">
            Meet the dedicated professionals and passionate students driving Gradient's mission
          </p>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl text-gray-900 mb-6">Excellence Through Collaboration</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Gradient's strength lies in our diverse team of educators, researchers, industry professionals, 
            and passionate students. Together, we bring together academic rigor, practical experience, 
            and innovative thinking to create exceptional educational experiences.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Diverse Expertise</h3>
              <p className="text-gray-600">
                Our team combines academic excellence with industry experience across multiple disciplines.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Global Network</h3>
              <p className="text-gray-600">
                Team members from leading institutions worldwide bring international perspectives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Innovation Focus</h3>
              <p className="text-gray-600">
                Committed to pushing boundaries and creating innovative educational experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <TeamSection title="Core Leadership Team" members={coreTeam} />
          <TeamSection title="Academic Advisory Board" members={academicBoard} />
          <TeamSection 
            title="Student Ambassadors" 
            members={studentAmbassadors} 
            columns="md:grid-cols-2 lg:grid-cols-3"
          />
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-gray-900 mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            Are you passionate about academic excellence and innovation? We're always looking for 
            talented individuals who share our vision. Explore opportunities to contribute to 
            Gradient's mission as a team member, advisor, or student ambassador.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                  </svg>
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Full-time Positions</h3>
                <p className="text-gray-600 text-sm">
                  Join our core team and help shape the future of academic competitions.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Academic Advisors</h3>
                <p className="text-gray-600 text-sm">
                  Share your expertise and help guide our academic programs.
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
                <h3 className="text-lg text-gray-900 mb-2">Student Ambassadors</h3>
                <p className="text-gray-600 text-sm">
                  Represent Gradient at your university and help grow our community.
                </p>
              </CardContent>
            </Card>
          </div>

          <a 
            href="mailto:careers@gradient.org"
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg transition-all inline-block"
          >
            Explore Opportunities
          </a>
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