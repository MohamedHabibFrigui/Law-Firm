import "./FAQSection.scss";
import Button from "../Button/Button";

const FAQSection = () => {
  return (
    <section className="FAQSection">
      <div className="container">
        <header className="center">
          <h3>Frequently Asked Questions</h3>
          <img src="sep2.svg" alt="sep" className="sep" />
        </header>
        <main>
          <div className="faqCard">
            <h3>What types of cases does your law firm handle?</h3>
            <p>
              At Attorney Law Firm we handle claims at all levels of litigation.
              Our areas of practice include Business Law, Employment and Labor
              Law, Intellectual Property/Technology Transactions, and Litigation
              another attorney may perform certain duties within the case
              itself.
            </p>
          </div>
          <div className="faqCard">
            <h3>How will I know which attorney in the group is best for me?</h3>
            <p>
              Our leadership team at the Thurman Law firm will determine which
              attorney can best represent you in handling your case. It may not
              be possible, or advantageous, to have one attorney handle all of
              your legal matters of the case, but from time to time.
            </p>
          </div>
          <div className="faqCard">
            <h3>How can I avoid being sued if a claim is made against me?</h3>
            <p>
              No one can stop a lawsuit from being filed. However, if there is a
              legitimate dispute that arises and a claim made against you,
              consult a lawyer behind-the-scenes work is being completed so that
              on the day your matter is ready, nothing will be overlooked.
            </p>
          </div>
          <div className="faqCard">
            <h3>
              What is the difference between divorce and legal separation?
            </h3>
            <p>
              In addition to ending your marriage, a divorce addresses all
              issues within the marriage, including property, finances, and
              child-related issues. This is the most common way to deal with
              marital issues, as Florida does not recognize legal separation.
            </p>
          </div>
          <div className="faqCard">
            <h3>Why should I have a lawyer representing me during divorce?</h3>
            <p>
              While many individuals proceed through the divorce process, having
              the help of an attorney with family law experience can go a long
              way toward protecting your interests. Florida’s family laws have
              developed over many decades and are complicated.
            </p>
          </div>
          <div className="faqCard">
            <h3>Do I need an attorney to start a business?</h3>
            <p>
              There are certain matters that are fairly straightforward or not
              unduly difficult to learn and, therefore, do not require the
              services of an attorney, like writing a business plan, researching
              and picking a name for your business or reserving a domain.
            </p>
          </div>
        </main>
        <footer className="center">
          <h3>Get a Free Consultation</h3>
          <p>
            You can get free consultation and case evaluation
            <br />
            from us via the following contact number
          </p>
          <Button type="filled" text="Contact Us" to="/contact-us" />
        </footer>
      </div>
    </section>
  );
};

export default FAQSection;
