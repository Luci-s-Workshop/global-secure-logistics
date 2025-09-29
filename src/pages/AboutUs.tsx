import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Target, Users, Globe, Award, Clock, CheckCircle, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  const timeline = [
    {
      year: '1984',
      title: 'Foundation',
      description: 'JDsecurity Shipping Company was established with a vision to revolutionize the logistics industry in India. Starting with a small team and limited resources, we focused on providing reliable air freight services with an emphasis on cargo security that was unprecedented at the time.'
    },
    {
      year: '1990s',
      title: 'Expansion Era',
      description: 'Expanded operations to cover sea freight and land transport. Established our first international partnerships and opened regional offices across India. Introduced computerized tracking systems, becoming one of the first logistics companies in India to offer digital tracking capabilities.'
    },
    {
      year: '2000s',
      title: 'Technology Integration',
      description: 'Launched our online platform and mobile applications. Implemented RFID tracking and GPS monitoring across our fleet. Achieved ISO certifications for quality management and began offering specialized services for high-value and sensitive cargo.'
    },
    {
      year: '2010s',
      title: 'Global Leadership',
      description: 'Ranked among the top freight forwarders in India. Expanded international network to cover 200+ destinations. Introduced blockchain technology for shipment tracking and implemented AI-powered logistics optimization systems.'
    },
    {
      year: '2020s',
      title: 'Innovation & Security',
      description: 'Launched JDsecurity\'s advanced security protocols including biometric verification and armed transport services. Introduced contactless delivery options and enhanced safety measures. Continued expansion with focus on sustainable logistics solutions and carbon-neutral shipping options.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'At JDsecurity, the safety and security of your cargo is our paramount concern. Every decision we make, every process we implement, and every technology we adopt is evaluated through the lens of security.'
    },
    {
      icon: Target,
      title: 'Reliability & Trust',
      description: 'We understand that our clients depend on us for their critical shipments. That\'s why reliability isn\'t just a goal – it\'s a guarantee. With on-time delivery rates exceeding 98%, comprehensive insurance coverage, and transparent communication.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation & Technology',
      description: 'In a rapidly evolving global marketplace, standing still means falling behind. JDsecurity continuously invests in cutting-edge technology and innovative solutions to enhance our service offerings.'
    },
    {
      icon: Users,
      title: 'Customer Excellence',
      description: 'Our success is measured by our clients\' success. We maintain a customer-centric approach in everything we do, offering personalized solutions, 24/7 support, and proactive communication.'
    },
    {
      icon: Globe,
      title: 'Global Reach, Local Expertise',
      description: 'While we operate on a global scale, we understand the importance of local knowledge and relationships. JDsecurity combines worldwide connectivity with deep local expertise in every market we serve.'
    },
    {
      icon: CheckCircle,
      title: 'Sustainability & Responsibility',
      description: 'We recognize our responsibility to future generations and are committed to sustainable business practices. JDsecurity actively works to reduce our carbon footprint through route optimization and fleet modernization.'
    }
  ];

  const stats = [
    { icon: Users, value: '5,000+', label: 'Employees Worldwide' },
    { icon: Shield, value: '200+', label: 'Certified Security Professionals' },
    { icon: TrendingUp, value: '50+', label: 'Technology Specialists' },
    { icon: Clock, value: '24/7', label: 'Customer Support Teams' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gradient mb-6 animate-fade-in">
              About JDsecurity Shipping Company
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Your Trusted Partner in Secure Global Logistics Since 1984
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Formed in 1984, JDsecurity Shipping Company has created a well-integrated Logistics Infrastructure and processes making it a market leader in Air Freight in India and also a well-established player providing other Logistics services through its subsidiaries across ocean freight forwarding, trucking, warehousing, custom broking, technology driven express cargo and parcel delivery and a wide range of Value-Added Services (VAS) for a diverse customer base across domestic and international markets.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We have been ranked as one of the top forwarders over the last decade in India for Air Exports. JDsecurity has evolved from a traditional freight forwarder to a comprehensive logistics solutions provider, integrating cutting-edge security technologies with time-tested logistics expertise.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
                    >
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-card border border-border rounded-2xl p-8 animate-slide-up">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To provide world-class logistics solutions that combine speed, security, and reliability, enabling our clients to expand their global reach with confidence. JDsecurity Shipping Company is committed to delivering exceptional value through innovative technology, comprehensive service offerings, and an uncompromising focus on the safety and security of every shipment entrusted to our care.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to be more than just a logistics provider; we aim to be a strategic partner in our clients' success. By leveraging our extensive network, advanced technology infrastructure, and deep industry expertise, we help businesses overcome logistical challenges, reduce costs, and accelerate their growth in the global marketplace.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To be recognized globally as the most trusted and innovative secure logistics company, setting industry standards for safety, efficiency, and customer service excellence. JDsecurity envisions a future where businesses of all sizes can confidently ship their goods anywhere in the world, knowing that their cargo is protected by the most advanced security measures and handled by the most professional team in the industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We see ourselves at the forefront of the logistics revolution, pioneering new technologies and methodologies that will shape the future of global trade. Our vision encompasses not just growth in size and reach, but also in capability and impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6 animate-fade-in">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6 animate-fade-in">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Four decades of innovation and growth in global logistics
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start mb-12 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl font-bold text-gradient mr-4">{item.year}</span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6 animate-fade-in">
                Recognition & Certifications
              </h2>
              <p className="text-xl text-muted-foreground animate-slide-up">
                Trusted by industry leaders and certified by global standards
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-card border border-border rounded-2xl p-8 animate-slide-in-left">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-bold">Industry Certifications</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    ISO 9001:2015 - Quality Management Systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    ISO 14001:2015 - Environmental Management Systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    ISO 45001:2018 - Occupational Health and Safety
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    ISO 27001:2013 - Information Security Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    AEO (Authorized Economic Operator) Certification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    IATA Certified Agent
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 animate-slide-in-right">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold">Industry Recognition</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    Top 10 Freight Forwarders in India - 10 consecutive years
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    Best Security Implementation in Logistics - 2023
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    Excellence in Customer Service Award - 2022
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    Innovation in Supply Chain Technology - 2021
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    Sustainable Logistics Provider of the Year - 2020
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3" />
                    Best Employer in Logistics Sector - 2019
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;