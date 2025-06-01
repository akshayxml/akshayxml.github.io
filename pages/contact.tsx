import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { contact } from 'config/contact';
import { openPopupWidget } from 'react-calendly';
import { RoughNotation } from 'react-rough-notation';

function Contact(): React.ReactElement {
  const [randomColor] = useRandomColorPair();

  function onScheduleMeeting(): void {
    if (!contact.calendly) {
      console.error('err: calendly link was not provided.');
      return;
    }

    const config = {
      url: contact.calendly,
    };

    openPopupWidget(config);
  }

  return (
    <>
      <PageSEO
        title={`Contact - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Contact' />
        <div className='container py-12'>
          <p>
            Got a project idea, a job opportunity, or just want to say hi? 
            <br/>
            Don’t hesitate to reach out via
           <a href="mailto:akshayknr7@gmail.com" target='_blank'
            title="akshayknr7@gmail.com"
            className="ml-2 text-black dark:text-white no-underline font-normal">
              <RoughNotation
                show
                type="underline"
                strokeWidth={2}
                animationDelay={250}
                animationDuration={2000}
                color={randomColor}
              >
                email
              </RoughNotation>
            </a>
            <span> or drop a message on</span>
            <a href={contact.links.linkedin} target='_blank'
            className="ml-2 text-black dark:text-white no-underline font-normal">
              <RoughNotation
                show
                type="underline"
                strokeWidth={2}
                animationDelay={250}
                animationDuration={2000}
                color={randomColor}
              >
                Linkedin
              </RoughNotation>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
