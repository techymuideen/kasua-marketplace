const Footer = () => {
  return (
    <footer className='flex border-t items-center justify-center p-6'>
      <div className='flex items-center gap-2'>
        <p className='text-sm text-gray-600'>
          &copy; {new Date().getFullYear()} Kasua. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
