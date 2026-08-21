import { title, paragraph } from "@/utils/fonts/fonts";

const PrivacyPolicyPage = () => {
  return (
    <main className='w-full overflow-x-hidden'>
      <div className='mx-auto w-full max-w-5xl'>
        {/* Header */}
        <div className='mb-10 text-center sm:mb-14'>
          <p
            className={`${paragraph.className} text-xs uppercase tracking-[0.2em] text-[#A38A7A] sm:text-sm sm:tracking-[0.3em]`}
          >
            GEO + ME BRIDAL
          </p>

          <h1
            className={`${title.className} mt-2 text-2xl font-light leading-tight text-[#2F2825] sm:mt-3 sm:text-4xl`}
          >
            Privacy Policy
          </h1>

          <p
            className={`${paragraph.className} mt-3 text-sm text-muted-foreground sm:mt-4`}
          >
            Effective Date: August 18, 2026
          </p>
        </div>

        {/* Content */}
        <div className='space-y-8 rounded-2xl border border-[#EEE7E2] bg-white p-5 shadow-sm sm:space-y-10 sm:rounded-3xl sm:p-8 lg:space-y-12 lg:p-14'>
          {/* Welcome */}
          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Welcome
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              At <strong>GEO + Me Bridal</strong>, your privacy is important to
              us. This Privacy Policy explains how we collect, use, protect, and
              disclose your personal information whenever you visit our website,
              create an account, place an order, or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Information We Collect
            </h2>

            <ul
              className={`${paragraph.className} list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700 sm:space-y-3 sm:pl-6 sm:text-base sm:leading-8`}
            >
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Delivery or Pickup Information</li>
              <li>Shipping Address</li>
              <li>Order History</li>
              <li>Shopping Cart Information</li>
              <li>Temporary Checkout Sessions</li>
              <li>Product Reservation Information</li>
            </ul>
          </section>

          {/* Payment Information */}
          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Payment Information
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              All online payments are securely processed through{" "}
              <strong>PayMongo</strong>. GEO + Me Bridal does not store your
              complete debit card, credit card, or other payment credentials on
              our servers.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              How We Use Your Information
            </h2>

            <ul
              className={`${paragraph.className} list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700 sm:space-y-3 sm:pl-6 sm:text-base sm:leading-8`}
            >
              <li>Process and fulfill your orders.</li>
              <li>Reserve products while you complete checkout.</li>
              <li>Arrange deliveries or pickup schedules.</li>
              <li>Provide customer support.</li>
              <li>Send order confirmations and updates.</li>
              <li>Improve our products and website experience.</li>
              <li>Prevent fraudulent or unauthorized transactions.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          {/* Product Reservations */}
          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Product Reservations
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              To prevent overselling, products may be temporarily reserved while
              you complete your payment. Reservations automatically expire if
              payment is not successfully completed within the reservation
              period, after which the reserved products become available for
              purchase again.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Cookies &amp; Local Storage
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              We use cookies and browser local storage to remember your shopping
              cart, maintain your checkout session, improve website
              functionality, and provide a smoother shopping experience.
            </p>
          </section>

          {/* Sharing */}
          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Sharing of Information
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              We do not sell or rent your personal information. Your data may be
              shared only with trusted third-party service providers such as
              payment processors, delivery partners, and government authorities
              when required by law.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Data Security
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              We implement appropriate administrative, organizational, and
              technical safeguards to protect your personal information from
              unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Your Rights
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              Subject to applicable laws, you may request access to your
              personal information, update inaccurate information, request
              deletion of your personal data, or withdraw consent for certain
              processing activities.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Changes to this Privacy Policy
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              GEO + Me Bridal reserves the right to update this Privacy Policy
              at any time. Any changes will become effective immediately upon
              posting on this page. We encourage you to review this policy
              periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2
              className={`${title.className} mb-3 text-lg text-[#2F2825] sm:mb-4 sm:text-2xl`}
            >
              Contact Us
            </h2>

            <p
              className={`${paragraph.className} text-sm leading-7 text-gray-700 sm:text-base sm:leading-8`}
            >
              If you have any questions regarding this Privacy Policy or how we
              handle your personal information, please contact us.
            </p>

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

export default PrivacyPolicyPage;
