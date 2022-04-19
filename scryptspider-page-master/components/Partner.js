const Partner = ({ work }) => {
  return (
    <div className='container my-5'>
      <div className='row pt-5 pb-3'>
        <div className='col-12'>
          <h3 className='h1 text-center '>Brands we've worked with</h3>
        </div>
      </div>
      <div className='row py-4'>
        {work.map((logo) => {
          return (
            <div className='col-lg-3 col-6 py-3' key={logo.title}>
              <div className='partners'>
                <img
                  alt={logo.title}
                  src={`https:${logo.logo.fields.file.url}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
