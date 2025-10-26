import './Contact.css'

export default function Contact () {

    const items = ['5195 East Stearns Street, Long Beach, CA 90815','Phone: (562) 498-6641', 'Fax: (562) 498-3344']
    const hours = ['Monday: 9:00 A.M. - 3:30 P.M', 'Tuesday: 9:00 A.M. - 3:30 P.M', 
        'Wednesday: 9:00 A.M. - 2:30 P.M.', 'Thursday: 9:00 A.M. - 3:30 P.M', 
        'Friday: 9:00 A.M. - 3:30 P.M',
        'Saturday: CLOSED', 'Sunday: CLOSED']

    return (
        <div className='contact-container'> 
            <h1>Contact Us</h1>

            <div className='map-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.0293130191285!2d-118.13418789139607!3d33.79645834920709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd31ed0b32a2fb%3A0xe220320af7c8ed48!2sOur%20Lady%20of%20Refuge!5e1!3m2!1sen!2sus!4v1761448773334!5m2!1sen!2sus" 
                    width="600"
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div className='contactinfo-container'>
                <div className='contact-header'>
                <h2>Contact Information</h2>
                </div>
                <div className='contact-text'>
                <ul>
                    {items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                     })}
                 </ul>
                </div>
            </div>
            <div className='hours-container'>
                <div className='hours-header'>
                <h2>Our Office Hours</h2>
                </div>        
            <div className='hours-text'>
                    <ul>
                    {hours.map((hours, index) => {
                    return <li key={index}>{hours}</li>;
                     })}
                 </ul>  
            </div>
        </div>
    </div> 
    )
}