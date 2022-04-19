const Members = ({ teamMember }) => {
  return (
    <div className='row justify-content-center'>
      {teamMember.map((t, index) => {
        return (
          <div className='members col-lg-3 col-md-6 col-12 p-4' key={index}>
            <div className='member-img  '>
              <img
                className='image-member img-fluid '
                src={`https:${t.fields.photo.fields.file.url}?w=720`}
                alt={t.fields.name}
              />
            </div>
            <div className='member-name text-center'>
              <h3>{t.fields.name}</h3>
              <p className='member-post'>{t.fields.position}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Members;
