import React,{useState} from 'react'
import {motion} from "framer-motion"
import './faq.css'

export default function FAQ() {
    const faq = [
        {
          question: "What is a developer portfolio?",
          answer: "A developer portfolio showcases your skills, projects, and experiences as a software developer. It's a collection of your work that demonstrates your expertise and abilities to potential employers or clients."
        },
        {
          question: "Why do I need a developer portfolio?",
          answer: "A portfolio provides a visual representation of your capabilities, helping you stand out in a competitive job market. It allows you to highlight your projects and skills, making it easier for recruiters or clients to evaluate your suitability for their needs."
        },
        {
          question: "What should I include in my portfolio?",
          answer: "Your portfolio should include a brief about you, your resume, a selection of projects with descriptions, technologies you're skilled in, any open-source contributions, and ways to contact you."
        },
        {
          question: "How do I choose projects to showcase?",
          answer: "Pick projects that showcase your diversity of skills and your passion. Include both personal and professional projects, and ensure they demonstrate your problem-solving abilities and the technologies you're proficient in."
        },
        {
          question: "Should I include the source code for my projects?",
          answer: "It's a good practice to provide access to your code, whether through GitHub links or direct download links. This demonstrates transparency and allows potential employers/clients to assess your coding style and approach."
        },
        {
          question: "How should I describe my projects?",
          answer: "Write clear and concise project descriptions. Explain the problem you solved, the technologies you used, your role in the project, and the impact it had. Use metrics when possible to quantify your achievements."
        },
        {
          question: "How do I showcase my technical skills?",
          answer: "You can showcase your skills through a dedicated section listing the programming languages, frameworks, libraries, and tools you're proficient in. You might also mention your familiarity with various development methodologies."
        },
        {
          question: "Can I include non-technical content?",
          answer: "Yes, you can include non-technical content that provides a well-rounded view of your personality and interests. This could be blog posts, articles, or personal hobbies that reflect your character beyond coding."
        },
        {
          question: "How often should I update my portfolio?",
          answer: "Regularly update your portfolio as you complete new projects, learn new technologies, or achieve significant milestones. This demonstrates your growth and keeps your portfolio relevant and engaging."
        },
        {
          question: "How can I optimize my portfolio for better visibility?",
          answer: "Consider optimizing your portfolio for search engines by using relevant keywords in your content. Additionally, share your portfolio on social media, GitHub, and developer communities to increase its visibility among your peers and potential employers/clients."
        }
      ];

      
        const [activeIndex, setActiveIndex] = useState(null);
      
        const toggleAccordion = (index) => {
          setActiveIndex(activeIndex === index ? null : index);
        };
        
        const animateDiv = {
          initial : {
              opacity:0,
              y:80,
          },
          animate: (index) => ({
            opacity:1,
            y:0,
            transition:{
              delay:0.05 * index
            }
          })
        }
        
  return (
    <div className='container'>
    <div className='heading'>
       <h1>Frequently Asked Question</h1> <br />
    </div>
    <div className="accordion">
      {faq.map((item, index) => (
        <motion.div
        variants={animateDiv}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once:true
                }}
                custom={index}
          key={index}
          className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
        >
          <div className="accordion-title" onClick={() => toggleAccordion(index)}>
            {item.question}
          </div>
          <div className="accordion-content">
            {activeIndex === index && <p>{item.answer}</p>}
          </div>
        </motion.div>
      ))}
    </div>
    
  </div>
  )
}
