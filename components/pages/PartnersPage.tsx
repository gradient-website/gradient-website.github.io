import React from 'react';
import { Card, CardContent } from '../ui/card';
import { MailingListForm } from '../MailingListForm';

export function PartnersPage() {
  const institutionalPartners = [
    {
      name: "University of Amsterdam",
      type: "Academic Institution",
      description: "Leading research university and founding partner",
      logo: "UvA"
    },
    {
      name: "TU Delft",
      type: "Academic Institution", 
      description: "Premier technical university partnership",
      logo: "TUD"
    },
    {
      name: "VU Amsterdam",
      type: "Academic Institution",
      description: "Collaborative academic programs",
      logo: "VU"
    },
    {
      name: "Erasmus University Rotterdam",
      type: "Academic Institution",
      description: "Research and education collaboration",
      logo: "EUR"
    },
    {
      name: "Utrecht University",
      type: "Academic Institution",
      description: "Joint academic initiatives",
      logo: "UU"
    },
    {
      name: "Amsterdam University of Applied Sciences",
      type: "Academic Institution",
      description: "Applied sciences partnership",
      logo: "AUAS"
    }
  ];

  const corporateSponsors = [
    {
      name: "Microsoft",
      type: "Technology Partner",
      description: "Cloud services and development tools",
      logo: "MS"
    },
    {
      name: "Google",
      type: "Technology Partner",
      description: "Platform support and resources",
      logo: "G"
    },
    {
      name: "ASML",
      type: "Industry Partner",
      description: "Innovation and engineering support",
      logo: "ASML"
    },
    {
      name: "Philips",
      type: "Innovation Partner",
      description: "Healthcare technology collaboration",
      logo: "PHI"
    },
    {
      name: "Shell",
      type: "Energy Partner",
      description: "Sustainability and energy innovation",
      logo: "SHL"
    },
    {
      name: "ING",
      type: "Financial Partner",
      description: "Financial technology and innovation",
      logo: "ING"
    }
  ];

  const organizationPartners = [
    {
      name: "Junction",
      type: "Event Partner",
      description: "Global hackathon organization",
      logo: "JUN"
    },
    {
      name: "ACM",
      type: "Professional Organization",
      description: "Computing machinery association",
      logo: "ACM"
    },
    {
      name: "IEEE",
      type: "Professional Organization", 
      description: "Electrical and electronics engineers",
      logo: "IEEE"
    },
    {
      name: "European Commission",
      type: "Government Partner",
      description: "Educational program support",
      logo: "EC"
    }
  ];

  const PartnerGrid = ({ partners, title }: { partners: any[], title: string }) => (
    <div className="mb-16">
      <h2 className="text-3xl text-gray-900 mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white mr-4">
                  <span className="text-sm">{partner.logo}</span>
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">{partner.name}</h3>
                  <p className="text-sm text-blue-600">{partner.type}</p>
                </div>
              </div>
              <p className="text-gray-600">{partner.description}</p>
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
            Our Partners
          </h1>
          <p className="text-xl text-gray-600">
            Building a network of excellence through strategic partnerships
          </p>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl text-gray-900 mb-6">Collaborative Excellence</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Gradient's success is built on strong partnerships with leading academic institutions, 
            innovative companies, and forward-thinking organizations. Together, we create opportunities 
            that transcend traditional educational boundaries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">50+</span>
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Partner Organizations</h3>
              <p className="text-gray-600">Across academia, industry, and government</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">15</span>
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Countries</h3>
              <p className="text-gray-600">International network of collaboration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">€2M+</span>
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Investment</h3>
              <p className="text-gray-600">In student programs and resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <PartnerGrid partners={institutionalPartners} title="Academic Partners" />
          <PartnerGrid partners={corporateSponsors} title="Corporate Sponsors" />
          <PartnerGrid partners={organizationPartners} title="Organization Partners" />
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl text-gray-900 mb-6">For Academic Institutions</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Enhanced student engagement through challenging competitions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Access to industry connections and career opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Collaborative research and development projects</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>International visibility and networking opportunities</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl text-gray-900 mb-6">For Corporate Partners</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Direct access to top talent and future leaders</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Brand visibility among academic and professional communities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Innovation insights from emerging technologies and ideas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Corporate social responsibility and community impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-gray-900 mb-6">
            Become a Partner
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our network of excellence and help shape the future of academic competition and innovation. 
            Discover partnership opportunities that align with your organization's goals and values.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:partnerships@gradient.org"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg transition-all inline-block"
            >
              Contact Partnership Team
            </a>
            <a 
              href="/partnership-proposal.pdf"
              target="_blank"
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg transition-all inline-block"
            >
              Download Partnership Guide
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