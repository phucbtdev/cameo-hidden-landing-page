const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Về 𝐂𝐀𝐌𝐄𝐎 𝟎𝟐. 𝐇𝐢𝐝𝐝𝐞𝐧 𝟐𝟒
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">
              𝐂𝐀𝐌𝐄𝐎 𝟎𝟐. 𝐇𝐢𝐝𝐝𝐞𝐧 𝟐𝟒
            </h3>
            <p className="text-gray-700 mb-6">
              Khách hàng tự do: <br />
              🍊 Chọn món nước và pha theo cách của mình <br />
              🍊 Chọn mẫu ly theo gout <br />
              🍊 Chọn chỗ ngồi phù hợp <br /> <br />
              Bật hoặc tắt đèn bàn cá nhân để cảm thấy thoải mái và có thể làm
              việc, học tập năng suất nhất. 𝐂𝐀𝐌𝐄𝐎 𝟎𝟐. 𝐇𝐢𝐝𝐝𝐞𝐧 𝟐𝟒 cũng khuyến
              khích 𝒄𝒂̉ 𝒏𝒉𝒂̀ 𝒄𝒂𝒎 thoải mái mang đồ ăn, thức uống cá nhân từ bên
              ngoài vào để tiếp tế cho những chiếc bụng đói lúc chạy deadline đ𝑒̂̉
              𝑑𝑒𝑎𝑑𝑙𝑖𝑛𝑒 𝑘ℎ𝑜̂𝑛𝑔 𝑐𝑜̀𝑛 𝑑𝑒𝑎𝑑𝑙y 𝑛𝑢̛̃𝑎.
            </p>
            <p className="text-gray-700">
              Nhằm đảm bảo không gian phù hợp với nhu cầu học tập và làm việc
              24/7, 𝐂𝐀𝐌𝐄𝐎 𝟎𝟐. 𝐇𝐢𝐝𝐝𝐞𝐧 𝟐𝟒 tụi mình xin phép chỉ nhận phục khách
              hàng từ 12 tuổi trở lên và không nhận thú cưng trong khu vực ngồi
              lại. <br />
              Rất mong nhận được sự thấu hiểu và cảm thông của 𝒄𝒂̉ 𝒏𝒉𝒂̀ 𝒄𝒂𝒎.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src="../public/images/cameo01.jpg"
              alt="Coffee shop interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
