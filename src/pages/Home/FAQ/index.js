import { useState } from "react";
import useFAQ from "./useFAQ";

import "./index.css";
import Loading from "../../../components/Loading";
const btnClass = "faqs-tab-link";
const activeBtnClass = "faqs-tab-link active";

function FAQ() {
    const { loading, data } = useFAQ();
    const [title, setTitle] = useState("general");

    const faqCollapse = (e) => {
        const questions = document.getElementsByClassName('question');
        for (let i = 0; i < questions.length; i++) {
            questions[i].classList.remove('collapsed');
        }

        e.target.parentElement.classList.toggle('collapsed');
    }

    return (
        <section id="faqs" className="container">
            <div className="section-title">
                <h2 className="title">Frequently Asked Questions</h2>
                <span className="tab t2">
                    <button
                        className={(title === "general") ? activeBtnClass : btnClass}
                        onClick={() => setTitle("general")}>
                        General
                    </button>
                    <button
                        className={(title === "getstart") ? activeBtnClass : btnClass}
                        onClick={() => setTitle("getstart")}>
                        Get Start
                    </button>
                    <button
                        className={(title === "pricing") ? activeBtnClass : btnClass}
                        onClick={() => setTitle("pricing")}>
                        Pricing
                    </button>
                    <button
                        className={(title === "campaign") ? activeBtnClass : btnClass}
                        onClick={() => setTitle("campaign")}>
                        Campaign
                    </button>
                </span>
            </div>
            <div className='tab-content'>
                <div>
                    {
                        loading
                            ? <Loading component />
                            : data
                                .filter(question => { return question.title.toLowerCase() === title.toLowerCase() })
                                .map(faq => (
                                    <div className='question'>
                                        <h3 onClick={faqCollapse}>{faq.question}</h3>
                                        <p>{faq.answer}</p>
                                    </div>
                                ))
                    }
                </div>
            </div>
            <div className='getintouch'>
                <img src='/images/icons/icon.homepage.getintouch.png' alt="" />
                <h3>Still have questions?</h3>
                <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <a href="/contact/" className='btn cta xxl'>Get in touch</a>
            </div>
        </section>
    )
}

export default FAQ;