import { PageWrapper, Contact } from '../../components'
import { useDocumentTitle } from '../../hooks'

const ContactPage = () => {
  useDocumentTitle('Contact | Ryan R. Campbell')

  return (
    <PageWrapper pageTitle='inquirer | inquiree' className='Contact-Page'>
      <main id='main-content' tabIndex={-1} className='contact-container'>
        <div id='contact' className='section-wrapper'>
          <h1>Contact</h1>
          <Contact />
        </div>
        <div className='section-wrapper'>
          <img
            className='contact-photo'
            src='/personal-photos/ryan_r_campbell-pheasant_hat-black_sweatshirt.jpg'
            alt='Ryan R. Campbell wearing a cap with a pheasant design and a black hoodie.'
            width={1086}
            height={1448}
          />
        </div>
      </main>
    </PageWrapper>
  )
}

export default ContactPage
