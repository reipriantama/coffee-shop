import React from 'react';

const Footer = () => {
  return (
    <div>
      this is footer
      <div className='flex px-40 pt-12 pb-24'>
        <div className='flex items-start gap-20'>
          <div className='flex flex-col gap-[30px] w-[415px]'>
            <div>Gedion Coffee</div>
            <div>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi
            </div>
            <div>
              logo medsos
            </div>
          </div>
          <div className=''>Explore</div>
        </div>
      </div>
      <div className=''>
        © 2023 Coffee Shop. All Rights Reserved. With love by Elmous
      </div>{' '}
    </div>
  );
};

export default Footer;
