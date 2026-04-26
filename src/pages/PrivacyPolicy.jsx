import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Landing/Navigation';
import Footer from '../components/Landing/Footer';
import { ShieldCheck, Eye, Lock, RefreshCw } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Privacy <span className="text-primary-600">Policy</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Last updated: April 27, 2026
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 mb-16">
            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
              <ShieldCheck className="w-6 h-6 text-blue-600 mb-2" />
              <p className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider">Secure</p>
            </div>
            <div className="p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
              <Eye className="w-6 h-6 text-green-600 mb-2" />
              <p className="text-xs font-bold text-green-900 dark:text-green-300 uppercase tracking-wider">Transparent</p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
              <Lock className="w-6 h-6 text-purple-600 mb-2" />
              <p className="text-xs font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider">Private</p>
            </div>
            <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800">
              <RefreshCw className="w-6 h-6 text-orange-600 mb-2" />
              <p className="text-xs font-bold text-orange-900 dark:text-orange-300 uppercase tracking-wider">Always Updated</p>
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-12 text-slate-600 dark:text-slate-400 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
              <p>
                At ZingQR, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services. By using ZingQR, you agree to the terms outlined in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
              <p>
                <strong>Client-Side Processing:</strong> Most of our services, including QR code generation, happen entirely within your browser. We do not transmit or store the content of your QR codes on our servers unless explicitly stated (e.g., for premium cloud-stored codes).
              </p>
              <p>
                <strong>Usage Data:</strong> We may collect anonymous usage data such as page views and interaction patterns to improve our service performance and user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. How We Use Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Improve and personalize your experience</li>
                <li>Analyze how our services are used</li>
                <li>Communicate with you regarding updates or support (if you contact us)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Third-Party Services</h2>
              <p>
                We may use third-party services like Google Analytics or AdSense. These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Questions?</h2>
              <p className="mb-0">
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@zingqr.com" className="text-primary-600 font-medium">privacy@zingqr.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
