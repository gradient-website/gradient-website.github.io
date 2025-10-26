(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [327],
  {
    224: function (e, s, r) {
      Promise.resolve().then(r.bind(r, 1488));
    },
    1488: function (e, s, r) {
      "use strict";
      (r.r(s),
        r.d(s, {
          default: function () {
            return m;
          },
        }));
      var t = r(7437),
        a = r(2265),
        n = r(2869),
        i = r(5186),
        l = r(9755);
      let o = a.forwardRef((e, s) => {
        let { className: r, ...a } = e;
        return (0, t.jsx)("textarea", {
          className: (0, l.cn)(
            "flex min-h-[120px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            r,
          ),
          ref: s,
          ...a,
        });
      });
      o.displayName = "Textarea";
      var c = r(6070),
        d = r(9184);
      function x() {
        let [e, s] = (0, a.useState)({
            name: "",
            email: "",
            organization: "",
            subject: "",
            message: "",
          }),
          [r, l] = (0, a.useState)(!1),
          x = (r) => {
            s({ ...e, [r.target.name]: r.target.value });
          },
          m = [
            {
              title: "General Inquiries",
              email: "contact@gradient.org",
              description:
                "For general questions and information about Gradient",
              icon: (0, t.jsx)("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                }),
              }),
            },
            {
              title: "Event Registration",
              email: "events@gradient.org",
              description:
                "Questions about competitions and event participation",
              icon: (0, t.jsx)("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m1 0h2a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h2m8 0V7a1 1 0 00-1-1H9a1 1 0 00-1 1v2h8z",
                }),
              }),
            },
            {
              title: "Partnerships",
              email: "partnerships@gradient.org",
              description:
                "Collaboration opportunities and sponsorship inquiries",
              icon: (0, t.jsx)("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                }),
              }),
            },
            {
              title: "Career Opportunities",
              email: "careers@gradient.org",
              description: "Join our team and academic advisory positions",
              icon: (0, t.jsx)("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6z",
                }),
              }),
            },
          ];
        return (0, t.jsxs)("div", {
          className: "min-h-screen bg-white",
          children: [
            (0, t.jsx)("section", {
              className:
                "py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50",
              children: (0, t.jsxs)("div", {
                className: "max-w-4xl mx-auto text-center",
                children: [
                  (0, t.jsx)("h1", {
                    className: "text-4xl md:text-5xl text-gray-900 mb-6",
                    children: "Contact Us",
                  }),
                  (0, t.jsx)("p", {
                    className: "text-xl text-gray-600",
                    children:
                      "Get in touch with our team for questions, partnerships, or collaboration opportunities",
                  }),
                ],
              }),
            }),
            (0, t.jsx)("section", {
              className: "py-16 px-4 sm:px-6 lg:px-8",
              children: (0, t.jsxs)("div", {
                className: "max-w-6xl mx-auto",
                children: [
                  (0, t.jsxs)("div", {
                    className: "text-center mb-12",
                    children: [
                      (0, t.jsx)("h2", {
                        className: "text-3xl text-gray-900 mb-4",
                        children: "How Can We Help?",
                      }),
                      (0, t.jsx)("p", {
                        className: "text-lg text-gray-600 max-w-3xl mx-auto",
                        children:
                          "Whether you're a student interested in competitions, an institution seeking partnerships, or an organization looking to collaborate, we'd love to hear from you.",
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-16",
                    children: m.map((e, s) =>
                      (0, t.jsx)(
                        c.Zb,
                        {
                          className:
                            "border border-gray-200 hover:shadow-lg transition-shadow",
                          children: (0, t.jsx)(c.aY, {
                            className: "p-6",
                            children: (0, t.jsxs)("div", {
                              className: "flex items-start space-x-4",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0",
                                  children: e.icon,
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("h3", {
                                      className: "text-lg text-gray-900 mb-2",
                                      children: e.title,
                                    }),
                                    (0, t.jsx)("a", {
                                      href: "mailto:".concat(e.email),
                                      className:
                                        "text-blue-600 hover:text-blue-700 mb-2 block",
                                      children: e.email,
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-gray-600 text-sm",
                                      children: e.description,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        },
                        s,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            (0, t.jsx)("section", {
              className: "py-16 px-4 sm:px-6 lg:px-8 bg-gray-50",
              children: (0, t.jsx)("div", {
                className: "max-w-6xl mx-auto",
                children: (0, t.jsxs)("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("h2", {
                          className: "text-3xl text-gray-900 mb-6",
                          children: "Send Us a Message",
                        }),
                        (0, t.jsx)(c.Zb, {
                          className: "border border-gray-200",
                          children: (0, t.jsx)(c.aY, {
                            className: "p-6",
                            children: r
                              ? (0, t.jsxs)("div", {
                                  className: "text-center py-8",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                      children: (0, t.jsx)("svg", {
                                        className: "w-8 h-8 text-green-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0, t.jsx)("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M5 13l4 4L19 7",
                                        }),
                                      }),
                                    }),
                                    (0, t.jsx)("h3", {
                                      className: "text-xl text-gray-900 mb-2",
                                      children: "Message Sent!",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-gray-600",
                                      children:
                                        "Thank you for contacting us. We'll get back to you within 24 hours.",
                                    }),
                                  ],
                                })
                              : (0, t.jsxs)("form", {
                                  onSubmit: (e) => {
                                    (e.preventDefault(),
                                      l(!0),
                                      s({
                                        name: "",
                                        email: "",
                                        organization: "",
                                        subject: "",
                                        message: "",
                                      }),
                                      setTimeout(() => l(!1), 5e3));
                                  },
                                  className: "space-y-4",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 gap-4",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          children: [
                                            (0, t.jsx)("label", {
                                              className:
                                                "block text-gray-700 mb-2",
                                              children: "Name *",
                                            }),
                                            (0, t.jsx)(i.I, {
                                              type: "text",
                                              name: "name",
                                              value: e.name,
                                              onChange: x,
                                              required: !0,
                                              placeholder: "Your full name",
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          children: [
                                            (0, t.jsx)("label", {
                                              className:
                                                "block text-gray-700 mb-2",
                                              children: "Email *",
                                            }),
                                            (0, t.jsx)(i.I, {
                                              type: "email",
                                              name: "email",
                                              value: e.email,
                                              onChange: x,
                                              required: !0,
                                              placeholder:
                                                "your.email@example.com",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsx)("label", {
                                          className: "block text-gray-700 mb-2",
                                          children: "Organization",
                                        }),
                                        (0, t.jsx)(i.I, {
                                          type: "text",
                                          name: "organization",
                                          value: e.organization,
                                          onChange: x,
                                          placeholder:
                                            "University, Company, or Organization",
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsx)("label", {
                                          className: "block text-gray-700 mb-2",
                                          children: "Subject *",
                                        }),
                                        (0, t.jsx)(i.I, {
                                          type: "text",
                                          name: "subject",
                                          value: e.subject,
                                          onChange: x,
                                          required: !0,
                                          placeholder:
                                            "Brief description of your inquiry",
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsx)("label", {
                                          className: "block text-gray-700 mb-2",
                                          children: "Message *",
                                        }),
                                        (0, t.jsx)(o, {
                                          name: "message",
                                          value: e.message,
                                          onChange: x,
                                          required: !0,
                                          rows: 6,
                                          placeholder:
                                            "Please provide details about your inquiry, including any specific requirements or questions you may have.",
                                        }),
                                      ],
                                    }),
                                    (0, t.jsx)(n.z, {
                                      type: "submit",
                                      className:
                                        "w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700",
                                      children: "Send Message",
                                    }),
                                  ],
                                }),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("h2", {
                          className: "text-3xl text-gray-900 mb-6",
                          children: "Visit Our Office",
                        }),
                        (0, t.jsx)(c.Zb, {
                          className: "border border-gray-200 mb-6",
                          children: (0, t.jsxs)(c.aY, {
                            className: "p-6",
                            children: [
                              (0, t.jsx)("h3", {
                                className: "text-xl text-gray-900 mb-4",
                                children: "Gradient Headquarters",
                              }),
                              (0, t.jsxs)("div", {
                                className: "space-y-3 text-gray-600",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "flex items-start",
                                    children: [
                                      (0, t.jsxs)("svg", {
                                        className:
                                          "w-5 h-5 mt-1 mr-3 text-blue-600 flex-shrink-0",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: [
                                          (0, t.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                                          }),
                                          (0, t.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        children: [
                                          (0, t.jsx)("p", {
                                            children: "University Campus",
                                          }),
                                          (0, t.jsx)("p", {
                                            children:
                                              "Academic Building, Room 101",
                                          }),
                                          (0, t.jsx)("p", {
                                            children: "Innovation Campus",
                                          }),
                                          (0, t.jsx)("p", {
                                            children:
                                              "Innovation District, Metropolis",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                      (0, t.jsx)("svg", {
                                        className: "w-5 h-5 mr-3 text-blue-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0, t.jsx)("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                                        }),
                                      }),
                                      (0, t.jsx)("span", {
                                        children: "+31 20 000 0000",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                      (0, t.jsx)("svg", {
                                        className: "w-5 h-5 mr-3 text-blue-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0, t.jsx)("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                                        }),
                                      }),
                                      (0, t.jsxs)("div", {
                                        children: [
                                          (0, t.jsx)("p", {
                                            children: "Office Hours:",
                                          }),
                                          (0, t.jsx)("p", {
                                            children:
                                              "Monday - Friday: 9:00 AM - 5:00 PM CET",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)(c.Zb, {
                          className: "border border-gray-200",
                          children: (0, t.jsxs)(c.aY, {
                            className: "p-6",
                            children: [
                              (0, t.jsx)("h3", {
                                className: "text-xl text-gray-900 mb-4",
                                children: "Quick Response Times",
                              }),
                              (0, t.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className:
                                      "flex justify-between items-center",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className: "text-gray-600",
                                        children: "General Inquiries",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "text-green-600",
                                        children: "< 24 hours",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "flex justify-between items-center",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className: "text-gray-600",
                                        children: "Partnership Requests",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "text-green-600",
                                        children: "< 48 hours",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "flex justify-between items-center",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className: "text-gray-600",
                                        children: "Event Registration",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "text-green-600",
                                        children: "< 12 hours",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "flex justify-between items-center",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className: "text-gray-600",
                                        children: "Technical Support",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "text-green-600",
                                        children: "< 6 hours",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, t.jsx)("section", {
              className: "py-16 px-4 sm:px-6 lg:px-8",
              children: (0, t.jsxs)("div", {
                className: "max-w-4xl mx-auto text-center",
                children: [
                  (0, t.jsx)("h2", {
                    className: "text-3xl text-gray-900 mb-6",
                    children: "Connect With Us",
                  }),
                  (0, t.jsx)("p", {
                    className: "text-lg text-gray-600 mb-8",
                    children:
                      "Follow our social media channels for the latest updates, event announcements, and community highlights.",
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex justify-center space-x-6 mb-8",
                    children: [
                      (0, t.jsx)("a", {
                        href: "#",
                        className:
                          "text-gray-400 hover:text-blue-600 transition-colors",
                        children: (0, t.jsx)("svg", {
                          className: "h-8 w-8",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                          }),
                        }),
                      }),
                      (0, t.jsx)("a", {
                        href: "#",
                        className:
                          "text-gray-400 hover:text-blue-600 transition-colors",
                        children: (0, t.jsx)("svg", {
                          className: "h-8 w-8",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                          }),
                        }),
                      }),
                      (0, t.jsx)("a", {
                        href: "#",
                        className:
                          "text-gray-400 hover:text-blue-600 transition-colors",
                        children: (0, t.jsx)("svg", {
                          className: "h-8 w-8",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, t.jsx)("section", {
              className: "py-12 px-4 sm:px-6 lg:px-8 bg-gray-50",
              children: (0, t.jsx)("div", {
                className: "max-w-2xl mx-auto",
                children: (0, t.jsx)(d.E, {}),
              }),
            }),
          ],
        });
      }
      function m() {
        return (0, t.jsx)(x, {});
      }
    },
    9184: function (e, s, r) {
      "use strict";
      r.d(s, {
        E: function () {
          return l;
        },
      });
      var t = r(7437),
        a = r(2265),
        n = r(2869),
        i = r(5186);
      function l(e) {
        let { variant: s = "default" } = e,
          [r, l] = (0, a.useState)(""),
          [o, c] = (0, a.useState)(!1),
          d = (e) => {
            (e.preventDefault(), c(!0), l(""), setTimeout(() => c(!1), 3e3));
          };
        return "hero" === s
          ? (0, t.jsxs)("form", {
              onSubmit: d,
              className: "flex flex-col sm:flex-row gap-4 max-w-md mx-auto",
              children: [
                (0, t.jsx)(i.I, {
                  type: "email",
                  placeholder: "Enter your email address",
                  value: r,
                  onChange: (e) => l(e.target.value),
                  required: !0,
                  className: "flex-1",
                }),
                (0, t.jsx)(n.z, {
                  type: "submit",
                  className:
                    "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8",
                  children: o ? "Subscribed!" : "Join Now",
                }),
              ],
            })
          : (0, t.jsxs)("div", {
              className:
                "bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-gray-200",
              children: [
                (0, t.jsx)("h3", {
                  className: "text-lg text-gray-900 mb-2",
                  children: "Stay Updated",
                }),
                (0, t.jsx)("p", {
                  className: "text-gray-600 mb-4",
                  children:
                    "Join our mailing list to receive updates about upcoming events, Olympiads, and important announcements.",
                }),
                (0, t.jsxs)("form", {
                  onSubmit: d,
                  className: "flex gap-4",
                  children: [
                    (0, t.jsx)(i.I, {
                      type: "email",
                      placeholder: "Enter your email address",
                      value: r,
                      onChange: (e) => l(e.target.value),
                      required: !0,
                      className: "flex-1",
                    }),
                    (0, t.jsx)(n.z, {
                      type: "submit",
                      className:
                        "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700",
                      children: o ? "Subscribed!" : "Subscribe",
                    }),
                  ],
                }),
              ],
            });
      }
    },
    2869: function (e, s, r) {
      "use strict";
      r.d(s, {
        z: function () {
          return c;
        },
      });
      var t = r(7437),
        a = r(2265),
        n = r(5293),
        i = r(535),
        l = r(9755);
      let o = (0, i.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700",
                destructive: "bg-red-500 text-white hover:bg-red-600",
                outline:
                  "border border-input bg-transparent hover:bg-gray-50 text-gray-900",
                secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
                ghost: "hover:bg-gray-100 hover:text-gray-900",
                link: "text-blue-600 underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 px-3",
                lg: "h-11 px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        ),
        c = a.forwardRef((e, s) => {
          let { className: r, variant: a, size: i, asChild: c = !1, ...d } = e,
            x = c ? n.g7 : "button";
          return (0, t.jsx)(x, {
            className: (0, l.cn)(o({ variant: a, size: i }), r),
            ref: s,
            ...d,
          });
        });
      c.displayName = "Button";
    },
    6070: function (e, s, r) {
      "use strict";
      r.d(s, {
        Ol: function () {
          return l;
        },
        Zb: function () {
          return i;
        },
        aY: function () {
          return c;
        },
        ll: function () {
          return o;
        },
      });
      var t = r(7437),
        a = r(2265),
        n = r(9755);
      let i = a.forwardRef((e, s) => {
        let { className: r, ...a } = e;
        return (0, t.jsx)("div", {
          ref: s,
          className: (0, n.cn)(
            "rounded-xl border border-gray-200 bg-white shadow-sm",
            r,
          ),
          ...a,
        });
      });
      i.displayName = "Card";
      let l = a.forwardRef((e, s) => {
        let { className: r, ...a } = e;
        return (0, t.jsx)("div", {
          ref: s,
          className: (0, n.cn)("border-b border-gray-200 px-6 py-5", r),
          ...a,
        });
      });
      l.displayName = "CardHeader";
      let o = a.forwardRef((e, s) => {
        let { className: r, ...a } = e;
        return (0, t.jsx)("h3", {
          ref: s,
          className: (0, n.cn)("text-lg font-semibold text-gray-900", r),
          ...a,
        });
      });
      o.displayName = "CardTitle";
      let c = a.forwardRef((e, s) => {
        let { className: r, ...a } = e;
        return (0, t.jsx)("div", {
          ref: s,
          className: (0, n.cn)("px-6 py-5 text-gray-700", r),
          ...a,
        });
      });
      c.displayName = "CardContent";
    },
    5186: function (e, s, r) {
      "use strict";
      r.d(s, {
        I: function () {
          return i;
        },
      });
      var t = r(7437),
        a = r(2265),
        n = r(9755);
      let i = a.forwardRef((e, s) => {
        let { className: r, type: a = "text", ...i } = e;
        return (0, t.jsx)("input", {
          type: a,
          className: (0, n.cn)(
            "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            r,
          ),
          ref: s,
          ...i,
        });
      });
      i.displayName = "Input";
    },
    9755: function (e, s, r) {
      "use strict";
      r.d(s, {
        cn: function () {
          return n;
        },
      });
      var t = r(1994),
        a = r(3335);
      function n() {
        for (var e = arguments.length, s = Array(e), r = 0; r < e; r++)
          s[r] = arguments[r];
        return (0, a.m6)((0, t.W)(s));
      }
    },
  },
  function (e) {
    (e.O(0, [50, 971, 117, 744], function () {
      return e((e.s = 224));
    }),
      (_N_E = e.O()));
  },
]);
