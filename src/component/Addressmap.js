import React from 'react';

export default function Addressmap() {
  
  return (
    <div className="google-map-code">
      { <div dangerouslySetInnerHTML={{__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.6302840296116!2d80.18567913442996!3d12.951154020617402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266efd3ffffff%3A0x268939083f42f014!2sDYNAMIC%20AIR%20ENGINEERING!5e0!3m2!1sen!2sin!4v1647441413975!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'}}/> }
    </div>
  )
}

