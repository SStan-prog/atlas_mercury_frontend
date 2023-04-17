import React, { useState, useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const SpamPolicyModal = ({ isOpen, closeModal }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleCloseModal);
    } else {
      document.removeEventListener('mousedown', handleCloseModal);
    }

    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
            <div
              ref={modalRef}
              className="relative max-w-3xl p-5 mx-5 my-20 border rounded-lg shadow-lg text-grey-1000 bg-grey-200 border-grey-400 dark:text-blue-100 dark:bg-blue-900 dark:border-grey-700 "
            >
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 mt-3 mr-3"
              >
                <svg
                  className="w-6 h-6 dark:text-gray-400 text-grey-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold sm:text-3xl">Spam Policy</h2>
                <p className="">
                  Your use of a Swift SMS Gateway® website, system or services
                  signifies your agreement with this SPAM Policy. This SPAM
                  Policy is subject to change without prior written notice at
                  any time, in Swift SMS Gateway®’s sole discretion. It is your
                  responsibility to review this SPAM Policy from time to time
                  for such changes.
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Disclaimer
                </h3>
                <p>
                  <strong>Swift SMS Gateway®</strong> may have provided links
                  and pointers to Internet sites maintained by third parties.{' '}
                  <strong>Swift SMS Gateway®</strong>
                  does not operate or control in any respect any information,
                  products or services on these third-party sites. The materials
                  in this site and the third-party sites are provided “as is”
                  and without warranties of any kind either express or implied.
                  To the fullest extent permissible pursuant to applicable law,{' '}
                  <strong>Swift SMS Gateway®</strong> disclaims all warranties,
                  express or implied, including, but not limited to, implied
                  warranties of merchantability and fitness for a particular
                  purpose. <strong>Swift SMS Gateway®</strong> does not warrant
                  that the functions contained in the materials will be
                  uninterrupted, or error-free, that defects will be corrected,
                  or that this site or the server that makes it available, are
                  free of viruses or other harmful components.{' '}
                  <strong>Swift SMS Gateway®</strong> does not warrant or make
                  any representations regarding the use, or the results of the
                  use of the materials in this site, or in third-party sites in
                  terms of their correctness, accuracy, timeliness, reliability
                  or otherwise. You (and not <strong>Swift SMS Gateway®</strong>
                  ) assume the entire cost of all necessary maintenance, repair
                  or correction.
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Ownership
                </h3>
                <p>
                  Copyrighted © 2007 – 2023.{' '}
                  <strong>Swift SMS Gateway Inc.®</strong> All Rights Reserved.
                  Unless otherwise specified, all components, such as layout
                  design, graphics, HTML, javascript, multimedia presentation of
                  this web site are the sole property of{' '}
                  <strong>Swift SMS Gateway®</strong>. No materials from this
                  web site may be reproduced, modified, copied, republished, or
                  distributed in any form without{' '}
                  <strong>Swift SMS Gateway®</strong>’s prior written consent.
                </p>
                <p>
                  www.smsgateway.ca™,{' '}
                  <a
                    href="https://www.swiftsmsgateway.com/"
                    target="_blank"
                    className="underline"
                  >
                    www.swiftsmsgateway.com™
                  </a>
                  ,{' '}
                  <a
                    href="https://beta.grext.com/"
                    target="_blank"
                    className="underline"
                  >
                    www.grext.com™
                  </a>{' '}
                  and the corporate logos of SMS Gateway,{' '}
                  <strong>Swift SMS Gateway®</strong> and Grext as well as other
                  product and service logos are trademarks of Swift SMS Gateway
                  Inc.® Resellers and partners of{' '}
                  <strong>Swift SMS Gateway®</strong> may place additional terms
                  upon these services exclusive to their own sale.{' '}
                  <strong>Swift SMS Gateway®</strong> holds no liability or
                  extended warranty to others terms. Other trademarks or service
                  marks are the property of their respective owners.
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Entire Agreement of this SPAM Policy
                </h3>
                <p>
                  Swift SMS Gateway® does not knowingly permit any SPAM messages
                  to be sent from our service at any time.
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Our Definition of Spam:
                </h3>
                <p>
                  In short, we consider any unsolicited, unexpected, or unwanted
                  text message, or any message originating from someone you have
                  not authorized to have your mobile number to be SPAM.
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Anti-Spam Policy Enforcement:
                </h3>
                <p>
                  As part of our terms and conditions agreement as a whole not
                  inclusive alone to customer obligations, our clients
                  specifically agree NOT to use Swift SMS Gateway® to send SPAM.
                  If we suspect a violation of our anti-spam policy and/or all
                  governing bodies, we will contact the client and discuss a
                  range of options to ensure an immediate end to the violation,
                  which may range from a warning to termination of service for
                  that client. Your termination of service does not limit our
                  right to seek further remedy and indemnity as a result of said
                  violation. To the best of our knowledge, our system adheres to
                  all provincial, state and national laws regarding SMS
                  messages. As such, should any SPAM message unknowingly be sent
                  using our network, it is without our consent, as Swift SMS
                  Gateway® at all times to our best effort by reasonable means
                  forbids SPAM on our network, and considers it an an abuse of
                  our service. Continued use of our service, once identified as
                  SPAM, deems the client has taken full responsibility and
                  understands it is their sole duty to comply with the law.
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  SPAM and Abuse Reporting:
                </h3>
                <p>
                  Please let us know about any abuse or unwanted/unsolicited
                  messages. In your email, please include your mobile number,
                  the date and time you received it, and the contents of the
                  message. Send your report to{' '}
                  <a
                    href="mailto:contact@swiftsmsgateway.com"
                    className="underline"
                  >
                    contact@swiftsmsgateway.com
                  </a>
                </p>
                <p>
                  For more information on SPAM and how it is being approached in
                  the Canadian mobile market, we suggest you read the following:
                  <a
                    target="_blank"
                    href="https://fightspam-combattrelepourriel.ised-isde.canada.ca/site/canada-anti-spam-legislation/en"
                    className="underline"
                  >
                    Canada’s Anti-SPAM Legislation (CASL)
                  </a>
                  . Swift SMS Gateway®’s definition of SPAM and our enforcement
                  is at all times subject to the broader terms as defined by
                  CASL and the Canadian Radio-Television Telecommunications
                  Commission (CRTC) as enforced by the Government of Canada.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpamPolicyModal;
