import Image from 'next/image';

const Details = () => {
  return (
    <div className='details'>
      <div className='detail-img'>
        <Image src='/blog-2.jpg' height={500} width={1581.09} />
      </div>
      <div className='detail-container'>
        <div className='detail-title'>
          <h1>Always At Your Service: Mero Rating</h1>
          <p>
            A person’s day starts and ends with a majestic range of activities
            which require various services with a satisfactory experience.
            Today, the hungriness of satisfying yourself to get a blissful time
            might be a mission relatively harder to accomplish. For making your
            daily to occasional experiences worthy of remembering, Mero Rating
            is at your service, rate your experience; rate your satisfaction.
            Mero Rating provides an open platform for you to share your
            experiences with millions of users, keeping you updated on the
            experiences of other users. A diverse variety of businesses offers
            their services to facilitate the users, guiding them to explore
            every business offering different services and receive their
            assistance. A bridge between the service provider and the user: Mero
            Rating. A team of developers and designers, an idea to facilitate
            the booming real world and provide solutions to the simple yet major
            real-time problems turned out as Mero Rating. The program first
            launched in the year 2020, is now growing and enhancing each day.
            Mero Rating community is growing every day with new businesses and
            users as businesses share their services and strength, and users
            share their experiences. Different updates and changes have been
            made in Mero Rating since the day it came to the market, which
            enhanced the system and now at the present day, is very feasible and
            user-friendly. The major players in the system are the Users and the
            Businesses.
          </p>
        </div>
      </div>
      <div className='author-detail'>
        <h3>Post published by: </h3>
        <div className=' detail-author'>
          <Image src='/parin-img.jpg' height={96} width={96} />
          <div className='author-info'>
            <p>Parin Limbu</p>
            <p>Frontend Developer | Mero Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
