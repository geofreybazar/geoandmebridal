import { title, paragraph } from "@/utils/fonts/fonts";

const TermsOfServicePage = () => {
  return (
    <main>
      <div className='mx-auto max-w-5xl'>
        {/* Header */}
        <div className='mb-14 text-center'>
          <p
            className={`${paragraph.className} text-xs uppercase tracking-[0.2em] text-[#A38A7A] sm:text-sm sm:tracking-[0.3em]`}
          >
            GEO + ME BRIDAL
          </p>

          <h1
            className={`${title.className} mt-2 text-2xl font-light leading-tight text-[#2F2825] sm:mt-3 sm:text-4xl`}
          >
            Terms of Service
          </h1>

          <p
            className={`${paragraph.className} mt-3 text-sm text-muted-foreground sm:mt-4`}
          >
            Effective Date: August 18, 2026
          </p>
        </div>

        {/* Content */}
        <div className='space-y-12 rounded-3xl border border-[#EEE7E2] bg-white p-8 shadow-sm lg:p-14'>
          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Acceptance of Terms
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              Welcome to <strong>GEO + Me Bridal</strong>. By accessing,
              browsing, or using our website, you agree to be bound by these
              Terms of Service. If you do not agree with any part of these
              terms, please discontinue using our website.
            </p>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Eligibility
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              You must be at least eighteen (18) years old or have the consent
              of a parent or legal guardian to use our website and purchase our
              products.
            </p>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Products &amp; Availability
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              We strive to provide accurate descriptions, pricing, and images of
              all products. However, actual colors and appearances may vary due
              to monitor settings. Product availability is subject to change
              without prior notice.
            </p>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Orders
            </h2>

            <ul
              className={`${paragraph.className} list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700 sm:space-y-3 sm:pl-6 sm:text-base sm:leading-8`}
            >
              <li>Submitting an order does not guarantee acceptance.</li>
              <li>
                GEO + Me Bridal reserves the right to refuse or cancel any
                order.
              </li>
              <li>
                Orders may be cancelled due to pricing errors, unavailable
                inventory, suspected fraud, or payment issues.
              </li>
              <li>
                Orders are considered confirmed only after successful payment
                verification.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Product Reservations
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              To ensure fair inventory management, products may be temporarily
              reserved while you complete your payment. Reservations are not
              considered completed purchases and automatically expire if payment
              is not completed within the reservation period.
            </p>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Pricing &amp; Payments
            </h2>

            <ul
              className={`${paragraph.className} list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700 sm:space-y-3 sm:pl-6 sm:text-base sm:leading-8`}
            >
              <li>All prices are displayed in Philippine Pesos (PHP).</li>
              <li>Prices may change without prior notice.</li>
              <li>
                Payments are securely processed through{" "}
                <strong>PayMongo</strong>.
              </li>
              <li>
                GEO + Me Bridal does not store your debit or credit card
                information.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Delivery &amp; Pickup
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              Customers are responsible for providing accurate delivery and
              pickup information. GEO + Me Bridal shall not be liable for delays
              caused by incorrect information, courier issues, weather
              conditions, or other circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Returns &amp; Refunds
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              Returns, exchanges, and refunds are subject to our Return Policy.
              Customized, altered, or made-to-order bridal products may not be
              eligible for return unless required by applicable consumer laws.
            </p>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              User Accounts
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              If you create an account, you are responsible for maintaining the
              confidentiality of your login credentials and for all activities
              that occur under your account. Please notify us immediately if you
              suspect unauthorized access.
            </p>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Prohibited Activities
            </h2>

            <ul
              className={`${paragraph.className} list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700 sm:space-y-3 sm:pl-6 sm:text-base sm:leading-8`}
            >
              <li>Using the website for unlawful purposes.</li>
              <li>Attempting unauthorized access to our systems.</li>
              <li>Uploading malicious software or harmful code.</li>
              <li>Submitting fraudulent orders.</li>
              <li>Interfering with the website's normal operation.</li>
              <li>Copying or scraping website content without permission.</li>
            </ul>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Intellectual Property
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              All website content, including logos, photographs, product
              descriptions, graphics, designs, source code, and branding, are
              the exclusive property of GEO + Me Bridal and may not be copied,
              reproduced, distributed, or modified without prior written
              permission.
            </p>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Limitation of Liability
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              To the fullest extent permitted by law, GEO + Me Bridal shall not
              be liable for any indirect, incidental, consequential, or special
              damages arising from the use of our website, products, payment
              services, or third-party providers.
            </p>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Privacy
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              Your use of this website is also governed by our Privacy Policy,
              which explains how we collect, use, and protect your personal
              information.
            </p>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Changes to These Terms
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              GEO + Me Bridal reserves the right to modify these Terms of
              Service at any time. Updated terms become effective immediately
              upon publication on this page. Continued use of the website
              constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Governing Law
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              These Terms of Service shall be governed by and interpreted in
              accordance with the laws of the Republic of the Philippines. Any
              disputes arising from the use of this website shall be subject to
              the jurisdiction of the appropriate courts of the Philippines.
            </p>
          </section>

          <section>
            <div className='mt-5 rounded-xl bg-[#F8F5F2] p-4 sm:mt-6 sm:rounded-2xl sm:p-6'>
              <p className={`${paragraph.className} text-sm sm:text-base`}>
                <strong>GEO + Me Bridal</strong>
              </p>

              <p
                className={`${paragraph.className} mt-1 break-words text-sm sm:text-base`}
              >
                Email: support@geoandmebridal.com
              </p>

              <p className={`${paragraph.className} mt-1 text-sm sm:text-base`}>
                Phone: (+63) 920-581-7115
              </p>

              <p
                className={`${paragraph.className} mt-1 break-words text-sm leading-6 sm:text-base sm:leading-7`}
              >
                Address: Tower 2, Unit 7G, Suntrust Solana Condominium,
                Natividad Lopez St. corner Ayala Blvd., Ermita, Manila
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
