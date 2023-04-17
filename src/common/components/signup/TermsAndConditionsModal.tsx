import React, { useState, useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const TermsAndConditionsModal = ({ isOpen, closeModal }: ModalProps) => {
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
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Terms and Conditions
                </h2>
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
                  Entire Agreement
                </h3>
                <h4 className="mt-2 text-lg font-bold sm:text-xl">
                  SA Terms and Conditions
                </h4>
                <h5 className="mt-2 text-lg font-bold">Services</h5>
                <p>
                  <strong>Swift SMS Gateway Inc.</strong>®, otherwise referred
                  to herein as “Swift” shall furnish to you; the “Customer”, the
                  services selected as per contracted to a customer’s formal
                  “Service Agreement” (SA) and/or; a monthly plan that you
                  subscribe to such as; messaging, platform and support plan.
                  Historically, Swift has previously referred to the SA as a
                  “Master Service Agreement” (MSA). They are the same. Terms and
                  Conditions detailed here adhered to in concert with the Swift
                  Support Plans located{' '}
                  <a
                    href="https://www.swiftsmsgateway.com/support-plans/"
                    target="_blank"
                  >
                    here
                  </a>
                  , Privacy Policy located{' '}
                  <a
                    href="https://www.swiftsmsgateway.com/privacy-policy/"
                    target="_blank"
                  >
                    here
                  </a>{' '}
                  and the Swift SPAM Policy located{' '}
                  <a
                    href="https://www.swiftsmsgateway.com/spam-policy/"
                    target="_blank"
                  >
                    here
                  </a>
                  . Together, these Policies with Support and the Terms and
                  Conditions collectively are attached to a customer’s formal SA
                  and are referred to as the “Services”. Your use of our
                  services represents your implicit acceptance and consent to be
                  bound to these “Services”.
                </p>
                <h5 className="mt-2 text-lg font-bold">Fees</h5>
                <p>
                  The Customer shall pay the fees for the Services at the rates
                  specified in their SA, plus applicable taxes (the “Fees”). The
                  payments shall be due and payable by the Customer to Swift in
                  advance monthly. In the event of suspension of services due to
                  the Customer’s delinquency, should the SA be re-instated, a
                  $25 reactivation fee from Swift is automatically levied in
                  addition to the regular fees.
                </p>

                <h5 className="mt-2 text-lg font-bold">Invoicing</h5>
                <p>
                  Invoices will be issued monthly for specific customers, at
                  Swift’s sole discretion subject to post-paid services.
                  Invoiced amounts are payable at the invoice date and are
                  subject to a late payment charge of three and one half percent
                  (3.5%) per month calculated from the invoice date, if not paid
                  within thirty (30) days of the invoice date and compounded
                  monthly. In accordance with Canadian Business Law, this is in
                  full adherence with, as detailed and held accountable by
                  section 347 of the Canadian Interest Act.
                </p>

                <h5 className="mt-2 text-lg font-bold">Credit Check</h5>
                <p>
                  The Customer consents to Swift, subject to applicable
                  legislation, conducting a credit check on the Customer.{' '}
                </p>

                <h5 className="mt-2 text-lg font-bold">Development Charges</h5>
                <p>
                  Where special facilities or equipment are necessary, or where
                  Swift must incur any unusual expense in order to furnish the
                  Services to the Customer over and above standard commencement
                  fees (collectively, known as the “Setup”), Swift shall provide
                  to the Customer a written quote for the Setup. If the Customer
                  acknowledges in writing its agreement with the quote, then
                  Swift shall levy all the additional fees as described and be
                  entitled to assess the additional charge to the Customer,
                  which shall be payable upon the commencement of the Term (as
                  herein defined).
                </p>

                <h5 className="mt-2 text-lg font-bold">Term</h5>
                <p>
                  This agreement shall be for the term as specified on the SA.{' '}
                </p>
                <p>
                  The requested commencement will be no more than 30 days past
                  due as specified unless otherwise stated.
                </p>
                <p>
                  Swift shall demonstrate best effort to inform the Customer of
                  any possible delays which may inhibit the ability to meet a
                  requested commencement date.
                </p>
                <p>
                  This agreement shall be deemed renewed in full at the end of
                  its specified term, if no notice is given to the contrary
                  within thirty days before its expiry date.
                </p>

                <h5 className="mt-2 text-lg font-bold">Termination Fee</h5>
                <p>
                  If the Term is for one (1) year or more, and this SA is for
                  any reason terminated by either Swift or the Customer prior to
                  the first anniversary date of the Commencement Date, the
                  Customer shall pay to Swift a termination fee (the
                  “Termination Fee”) equal to the remaining unpaid amount of the
                  Fees for the period from the date of termination to the first
                  anniversary date of the Commencement Date. The Customer
                  acknowledges that the Termination Fee is a genuine
                  pre‑estimate of Swift’s liquidated damages and is not a
                  penalty and is not in substitute or election of any other
                  right, or remedy Swift may have at law or in equity.
                </p>

                <h5 className="mt-2 text-lg font-bold">Customer Obligations</h5>
                <p>The Customer shall:</p>
                <p>
                  Be responsible for obtaining and maintaining all computer
                  hardware, software and communications equipment needed to
                  access the Service;
                </p>
                <p>
                  Be responsible for paying all access and pass-through charges
                  (e.g. ISP, carriers) if incurred while using the Service;
                </p>
                <p>
                  This agreement shall be deemed renewed in full at the end of
                  its specified term, if no notice is given to the contrary
                  within thirty days before its expiry date.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TermsAndConditionsModal;
