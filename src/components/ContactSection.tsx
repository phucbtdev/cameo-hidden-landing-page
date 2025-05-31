import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from "lucide-react";
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Liện hệ với chúng tôi
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We'd love to see you in person. Stop by for a cup of coffee and
            experience the Brew Haven difference.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-amber-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">
              Thông tin
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPinIcon className="text-amber-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-amber-900 mb-1">Địa chỉ</h4>
                  <p className="text-gray-700">17 Nguyễn Cư Trinh Cần Thơ</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="text-amber-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-amber-900 mb-1">Thời gian</h4>
                  <p className="text-gray-700">
                    Monday - Friday: 6:00 AM - 8:00 PM
                  </p>
                  <p className="text-gray-700">
                    Saturday - Sunday: 7:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="text-amber-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-amber-900 mb-1">
                    Số điện thoại
                  </h4>
                  <p className="text-gray-700">(+84) 933-657-570</p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="text-amber-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-amber-900 mb-1">Email</h4>
                  <p className="text-gray-700">cameo0524@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-medium text-amber-900 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.tiktok.com/@cameo02.hidden24"
                  className="text-amber-700 hover:text-amber-900 transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/cameo.hidden?locale=vi_VN"
                  className="text-amber-700 hover:text-amber-900 transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="text-amber-700 hover:text-amber-900 transition-colors"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md h-96">
            <img
              src="/images/visitus.jpg"
              alt="Coffee shop interior with customers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
