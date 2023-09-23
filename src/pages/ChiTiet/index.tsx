import { Carousel } from "antd";
import styled from "styled-components";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "200px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};

const section: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #eee",
  margin: "0 0 20px",
  padding: "0 15px",
  width: "100%",
  borderRadius: "5px",
};

const styleul: React.CSSProperties = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  width: "100%",
};

const styleli: React.CSSProperties = {
  borderBottom: "1px solid #eee",
  padding: "10px",
  minHeight: "auto !important",
  listStyle: "none",
  overflow: "hidden",
  position: "relative",
};

const ChiTietBenh = () => {
  return (
    <div id="main">
      <div className="overflow-hidden relative h-32">
        <div
          className="bottom-0 left-0 overflow-hidden absolute right-0 top-0"
          style={{
            background:
              '#f9f9f9 url("https://www.vinmec.com/static/build/0f1cd5e6980102be74432000ffae6c4a.jpg") no-repeat 100% 80% / auto 250px',
            content: " ",
          }}
        ></div>
        <div
          className="h-full relative"
          style={{ background: " hsla(0, 0%, 96%, 0.4)" }}
        >
          <div
            className="relative m-auto w-4/5"
            style={{ padding: "35px 0 35px" }}
          >
            <ul
              className=" flex"
              style={{
                color: "#777",
                fontSize: "12px",
                padding: "0 0 3px",
                lineHeight: "1.2",
                margin: 0,
              }}
            >
              <li>
                <a href="/">Trang chủ \</a>
              </li>
              <li className="active"> Bệnh</li>
            </ul>

            <h1 className="text-[26px] font-semibold">
              Bệnh lao phổi: Nguyên nhân, triệu chứng, chẩn đoán và điều trị
            </h1>
          </div>
        </div>
      </div>
      <div id="disease-detail">
        <div id="sticky-wrapper" className="h-12">
          <nav
            style={{
              background: "#f2f2f2",
              borderBottom: "2px solid #fff",
              clear: "both",
            }}
          >
            <div className="w-[82%] pl-2 pr-2 relative mr-auto ml-auto">
              <div
                className="overflow-auto relative"
                style={{ transition: "padding .4s" }}
              >
                <ul className="m-0 p-0 overflow-x-auto whitespace-nowrap">
                  <li className="inline-block mr-[-4px] hover:bg-white ">
                    <a
                      className="text-[#444] inline-block decoration-clone hover:text-blue-500"
                      style={{
                        padding: "10px 16px 8px",
                        borderBottom: "3px solid hsla(0,0%,100%,0)",
                        transition: "color .1s,border .1s,background .1s",
                      }}
                      href="#disease-description"
                    >
                      Tổng quan
                    </a>
                  </li>
                  <li className="inline-block  hover:bg-white">
                    <a
                      className="text-[#444] inline-block decoration-clone hover:text-blue-500"
                      style={{
                        padding: "10px 16px 8px",
                        borderBottom: "3px solid hsla(0,0%,100%,0)",
                        transition: "color .1s,border .1s,background .1s",
                      }}
                      href="#disease-causes"
                    >
                      Nguyên nhân
                    </a>
                  </li>
                  <li className="inline-block hover:bg-white">
                    <a
                      className="text-[#444] inline-block decoration-clone hover:text-blue-500"
                      style={{
                        padding: "10px 16px 8px",
                        borderBottom: "3px solid hsla(0,0%,100%,0)",
                        transition: "color .1s,border .1s,background .1s",
                      }}
                      href="#disease-symptoms_free"
                    >
                      Triệu chứng
                    </a>
                  </li>
                  <li className="inline-block hover:bg-white">
                    <a
                      className="text-[#444] inline-block decoration-clone hover:text-blue-500"
                      style={{
                        padding: "10px 16px 8px",
                        borderBottom: "3px solid hsla(0,0%,100%,0)",
                        transition: "color .1s,border .1s,background .1s",
                      }}
                      href="#disease-treatment_summary"
                    >
                      Đường lây truyền
                    </a>
                  </li>
                  <li className="inline-block hover:bg-white">
                    <a
                      className="text-[#444] inline-block decoration-clone hover:text-blue-500"
                      style={{
                        padding: "10px 16px 8px",
                        borderBottom: "3px solid hsla(0,0%,100%,0)",
                        transition: "color .1s,border .1s,background .1s",
                      }}
                      href="#disease-overview"
                    >
                      Đối tượng nguy cơ
                    </a>
                  </li>
                  <li className="inline-block hover:bg-white">
                    <a
                      className="text-[#444] inline-block decoration-clone hover:text-blue-500"
                      style={{
                        padding: "10px 16px 8px",
                        borderBottom: "3px solid hsla(0,0%,100%,0)",
                        transition: "color .1s,border .1s,background .1s",
                      }}
                      href="#disease-prevention"
                    >
                      Phòng ngừa
                    </a>
                  </li>
                  <li className="inline-block hover:bg-white">
                    <a
                      className="text-[#444] inline-block decoration-clone hover:text-blue-500"
                      style={{
                        padding: "10px 16px 8px",
                        borderBottom: "3px solid hsla(0,0%,100%,0)",
                        transition: "color .1s,border .1s,background .1s",
                      }}
                      href="#disease-diagnosis"
                    >
                      Biện pháp chẩn đoán
                    </a>
                  </li>
                  <li className="inline-block hover:bg-white">
                    <a
                      className="text-[#444] inline-block decoration-clone hover:text-blue-500"
                      style={{
                        padding: "10px 16px 8px",
                        borderBottom: "3px solid hsla(0,0%,100%,0)",
                        transition: "color .1s,border .1s,background .1s",
                      }}
                      href="#disease-treatment"
                    >
                      Biện pháp điều trị
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="w-4/5 pt-5 pl-2 pr-2 relative mr-auto ml-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="col-span-2">
            <div>
              <section className="mb-5">
                <h2
                  id="disease-description"
                  className="font-semibold mb-3"
                  style={{
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span
                    className="inline-block pb-[10px] relative before:bg-blue-700 before:bottom-[-1px] before:h-[3px] before:left-0 before:absolute before:right-[-5px]"
                    style={{
                      fontSize: "1.17rem",
                    }}
                  >
                    Tổng quan bệnh Bệnh lao phổi
                  </span>
                </h2>
                <div>
                  <div className="float-right mb-[10px] ml-[10px] w-[320px]">
                    <Carousel autoplay style={{ border: "1px solid #eee" }}>
                      <div>
                        <h3 style={contentStyle}>
                          <img
                            src="https://vinmec-prod.s3.amazonaws.com/images/31_05_2019_02_21_38_642019.jpeg"
                            alt=""
                          />
                        </h3>
                      </div>
                      <div>
                        <h3 style={contentStyle}>
                          <img
                            src="https://vinmec-prod.s3.amazonaws.com/images/31_05_2019_02_21_39_233902.jpeg"
                            alt=""
                          />
                        </h3>
                      </div>
                      <div>
                        <h3 style={contentStyle}>
                          <img
                            src="https://vinmec-prod.s3.amazonaws.com/images/31_05_2019_02_21_39_788069.png"
                            alt=""
                          />
                        </h3>
                      </div>
                    </Carousel>
                  </div>
                  <p>Bệnh lao là bệnh gì?</p>
                  <p>
                    Bệnh lao (còn gọi là TB) là một bệnh truyền nhiễm do vi
                    trùng lao gây nên. Nếu vi trùng lao thâm nhập vào một cơ
                    quan nào đó trong cơ thể và sinh sôi đồng thời cơ thể không
                    thể chống lại nó, khi đó sẽ hình thành bệnh lao.
                  </p>
                  <p>
                    Bệnh lao có thể gặp ở tất cả các bộ phận của cơ thể như lao
                    màng phổi, lao hạch bạch huyết, lao màng não, lao xương
                    khớp, lao màng bụng, lao hệ sinh dịch - tiết niệu, lao ruột,
                    trong đó bệnh lao phổi thường gặp nhất (chiếm 80 – 85%) và
                    là nguồn lây chính cho người xung quanh.
                  </p>
                  <p>
                    Đối với người bị nghi ngờ mắc bệnh lao phổi, nếu xét nghiệm
                    soi đờm trực tiếp thấy có vi khuẩn lao thì người bệnh được
                    chẩn đoán là lao phổi AFB(+) và ngược lại là lao phổi AFB(-)
                  </p>
                  <p>Những số liệu về tình trạng bệnh lao phổi:</p>
                  <ul>
                    <li>
                      <p>
                        Theo số liệu thống kê, năm 2015 có 1,8 triệu người bị
                        chết do lao phổi, trong số 10,4 triệu người mắc bệnh.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tổ chức Y tế Thế giới ước tính rằng mỗi năm có 9 triệu
                        người mắc bệnh lao, trong đó có 3 triệu người không được
                        điều trị y tế.
                      </p>
                    </li>
                    <li>
                      <p>
                        Các triệu chứng bệnh lao phổi có thể kéo dài trong nhiều
                        tháng. Một người bệnh lao phổi có thể lây nhiễm cho 10 -
                        15 người khác thông qua tiếp xúc gần trong 1 năm.
                      </p>
                    </li>
                  </ul>
                </div>
              </section>
              <section className="mb-5">
                <h2
                  id="disease-causes"
                  className="font-semibold mb-3"
                  style={{
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span
                    className="inline-block pb-[10px] relative before:bg-blue-700 before:bottom-[-1px] before:h-[3px] before:left-0 before:absolute before:right-[-5px]"
                    style={{
                      fontSize: "1.17rem",
                    }}
                  >
                    Nguyên nhân bệnh Bệnh lao phổi
                  </span>
                </h2>
                <div className="overflow-hidden w-full">
                  <p>
                    Bệnh lao là bệnh truyền nhiễm do vi khuẩn Mycobacterium
                    tuberculosis gây ra. Bệnh lây lan do vi khuẩn lao phát tán
                    ra ngoài khi người mắc lao phổi ho, nói, hắt hơi, khạc nhổ
                    mà vô tình người tiếp xúc gần đó có thể bị hít vào và gây
                    bệnh tại phổi. Từ phổi, vi khuẩn lao có thể qua đường máu
                    hay bạch huyết đến các tạng khác trong cơ thể và gây bệnh
                    tại đó.
                  </p>
                  <p>
                    Vi khuẩn lao có khả năng kháng lại cồn và axit mà ở nồng độ
                    đó vi khuẩn khác bị tiêu diệt. Vi khuẩn lao tồn tại được
                    nhiều tuần trong đờm, rác ẩm và tối, chết ở nhiệt độ 1000C/5
                    phút và dễ bị mất khả năng gây bệnh dưới ánh nắng mặt trời.
                  </p>
                </div>
              </section>
              <section className="mb-5">
                <h2
                  id="disease-symptoms_free"
                  className="font-semibold mb-3"
                  style={{
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span
                    className="inline-block pb-[10px] relative before:bg-blue-700 before:bottom-[-1px] before:h-[3px] before:left-0 before:absolute before:right-[-5px]"
                    style={{
                      fontSize: "1.17rem",
                    }}
                  >
                    Triệu chứng bệnh Bệnh lao phổi
                  </span>
                </h2>
                <div className="overflow-hidden w-full">
                  <p>Những triệu chứng lao phổi điển hình gồm:</p>
                  <ul>
                    <li>
                      <p>
                        Ho kéo dài hơn 3 tuần (ho khan, ho có đờm, ho ra máu) là
                        triệu chứng quan trọng nhất liên quan đến lao phổi
                      </p>
                    </li>
                    <li>
                      <p>Đau ngực, thỉnh thoảng khó thở</p>
                    </li>
                    <li>
                      <p>Cảm thấy&nbsp;mệt mỏi&nbsp;mọi lúc</p>
                    </li>
                    <li>
                      <p>Đổ mồ hôi trộm về đêm</p>
                    </li>
                    <li>
                      <p>Sốt nhẹ, ớn lạnh về chiều</p>
                    </li>
                    <li>
                      <p>Chán ăn, gầy sút</p>
                    </li>
                  </ul>
                  <p>
                    Bạn có thể gặp các triệu chứng khác không được nêu trên. Cơ
                    địa mỗi người là khác nhau, vì vậy hãy đến gặp bác sĩ để
                    được khám bệnh và tham khảo ý kiến.
                  </p>
                </div>
              </section>
              <section className="mb-5">
                <h2
                  id="disease-treatment_summary"
                  className="font-semibold mb-3"
                  style={{
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span
                    className="inline-block pb-[10px] relative before:bg-blue-700 before:bottom-[-1px] before:h-[3px] before:left-0 before:absolute before:right-[-5px]"
                    style={{
                      fontSize: "1.17rem",
                    }}
                  >
                    Đường lây truyền bệnh Bệnh lao phổi
                  </span>
                </h2>
                <div className="overflow-hidden w-full">
                  <p>
                    <a href="https://www.vinmec.com/vi/tin-tuc/thong-tin-suc-khoe/benh-lao-phoi-co-lay-khong/">
                      <strong>Bệnh lao phổi có lây?</strong>
                    </a>
                  </p>
                  <p>
                    Bệnh rất dễ lây từ người sang người do lây bằng đường hô
                    hấp. Không có ổ chứa mầm bệnh trong thiên nhiên hoặc vật
                    trung gian truyền bệnh
                  </p>
                  <p>
                    Nguồn bệnh là những người bệnh lao phổi, lao thanh quản, phế
                    quản trong giai đoạn ho khạc ra vi khuẩn lao.
                  </p>
                  <p>
                    Vi khuẩn lao trong các hạt nước bọt li ti, hoặc trong các
                    hạt bụi nhỏ có đường kính từ 1 đến 5 mm sẽ dễ dàng bị hít
                    vào và gây bệnh tại phổi. Từ phổi, vi khuẩn có thể qua máu,
                    bạch huyết đến các tạng khác trong cơ thể (hạch bạch huyết,
                    xương, gan, thận,...) và gây bệnh tại các cơ quan đó của cơ
                    thể.
                  </p>
                  <p>
                    Cứ 1 người bị lao phổi có ho khạc ra vi khuẩn có thể lây cho
                    10-15 người khác, nhất là trong các quần thể dân cư nhỏ như
                    gia đình, lớp học....
                  </p>
                  <ul>
                    <li>
                      <p>
                        Môi trường ô nhiễm nhiều khói bụi, ẩm ướt là điều kiện
                        thuận lợi để vi khuẩn lao phát triển và gây bệnh.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tiếp xúc với người bệnh lao phổi hoặc các chất thải chứa
                        vi khuẩn lao có thể bị lây nhiễm.
                      </p>
                    </li>
                    <li>
                      <p>
                        Sử dụng thực phẩm chứa vi khuẩn lao, ăn vật nuôi bị
                        nhiễm lao cũng có thể bị nhiễm lao.
                      </p>
                    </li>
                  </ul>
                  <p>Lưu ý:</p>
                  <ul>
                    <li>
                      <p>
                        Khả năng lây mạnh trong thời gian chưa được điều trị.
                        Nếu không được phát hiện và điều trị, người bệnh sẽ liên
                        tục phát tán vi khuẩn lao trong suốt thời gian họ sống.
                      </p>
                    </li>
                    <li>
                      <p>
                        Khi đã được điều trị bằng thuốc chống lao, khả năng lây
                        bệnh rất thấp
                      </p>
                    </li>
                    <li>
                      <p>
                        Bệnh lao ngoài phổi không có nguy cơ lây nhiễm cho người
                        khác.
                      </p>
                    </li>
                  </ul>
                </div>
              </section>
              <section className="mb-5">
                <h2
                  id="disease-overview"
                  className="font-semibold mb-3"
                  style={{
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span
                    className="inline-block pb-[10px] relative before:bg-blue-700 before:bottom-[-1px] before:h-[3px] before:left-0 before:absolute before:right-[-5px]"
                    style={{
                      fontSize: "1.17rem",
                    }}
                  >
                    Đối tượng nguy cơ bệnh Bệnh lao phổi
                  </span>
                </h2>
                <div className="overflow-hidden w-full">
                  <p>
                    Lao phổi là bệnh rất thường gặp, có thể ảnh hưởng mọi người
                    trong mọi lứa tuổi.
                  </p>
                  <p>Những yếu tố làm tăng nguy cơ mắc lao phổi bao gồm:</p>
                  <ul>
                    <li>Suy giảm miễn dịch: nhiễm HIV, ung thư...</li>
                    <li>Tiếp xúc trực tiếp với nguồn lây, đặc biệt trẻ em</li>
                    <li>
                      Bị các bệnh mạn tính: loét dạ dày tá tràng, đái tháo
                      đường, suy thận mãn…
                    </li>
                    <li>Nghiện ma túy, rượu, thuốc lá</li>
                    <li>
                      Sử dụng các thuốc ức chế miễn dịch kéo dài như
                      corticosteroid, hóa chất điều trị ung thư…
                    </li>
                  </ul>
                </div>
              </section>
              <section className="mb-5">
                <h2
                  id="disease-prevention"
                  className="font-semibold mb-3"
                  style={{
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span
                    className="inline-block pb-[10px] relative before:bg-blue-700 before:bottom-[-1px] before:h-[3px] before:left-0 before:absolute before:right-[-5px]"
                    style={{
                      fontSize: "1.17rem",
                    }}
                  >
                    Phòng ngừa bệnh Bệnh lao phổi
                  </span>
                </h2>
                <div className="overflow-hidden w-full">
                  <p>
                    Để phòng ngừa sự lây lan của bệnh lao phổi có thể áp dụng
                    một số biện pháp phòng chống sau:
                  </p>
                  <ul>
                    <li>
                      <p>
                        Tiêm phòng bệnh lao phổi: Tiêm BCG được thực hiện cho
                        trẻ em để phòng chống lao.&nbsp;Hiện nay, nhà nước đang
                        thực hiện tiêm phòng lao ngay tháng đầu sau sinh trong
                        chương trình Tiêm chủng mở rộng
                      </p>
                    </li>
                    <li>
                      <p>
                        Sử dụng khẩu trang khi đi ra ngoài hoặc khi tiếp xúc với
                        người bệnh lao phổi.
                      </p>
                    </li>
                    <li>
                      <p>
                        Che miệng khi hắt hơi, rửa tay sạch sẽ thường xuyên,
                        nhất là trước khi ăn và sau khi đi vệ sinh.
                      </p>
                    </li>
                    <li>
                      <p>Không sử dụng chung đồ dùng cá nhân với người bệnh.</p>
                    </li>
                    <li>
                      <p>
                        Người<strong> bệnh lao phổi</strong> tránh lây nhiễm cho
                        người khác bằng cách không ngủ cùng phòng với người
                        khác, không đến nơi đông người...
                      </p>
                    </li>
                    <li>
                      Người bệnh phải đeo khẩu trang, khi ho, hắt hơi phải che
                      miệng, khạc đờm vào chỗ qui định và đờm hoặc các vật chứa
                      nguồn lây phải được hủy đúng phương pháp.
                    </li>
                    <li>
                      Tận dụng ánh nắng mặt trời càng nhiều càng tốt cho nơi ở
                      và các vật dụng của người bệnh.
                    </li>
                    <li>
                      <p>
                        Thực hiện lối sống lành mạnh như: ăn uống hợp lý, ngủ
                        đầy đủ, tập thể dục đều đặn và không sử dụng các chất
                        gây nghiện như ma túy, rượu bia, thuốc lá…
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>
                        Vệ sinh nơi ở, nơi làm việc và khám sức khỏe định kỳ là
                        điều cần thiết để phòng bệnh lao.
                      </p>
                    </li>
                  </ul>
                </div>
              </section>
              <section className="mb-5">
                <h2
                  id="disease-diagnosis"
                  className="font-semibold mb-3"
                  style={{
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span
                    className="inline-block pb-[10px] relative before:bg-blue-700 before:bottom-[-1px] before:h-[3px] before:left-0 before:absolute before:right-[-5px]"
                    style={{
                      fontSize: "1.17rem",
                    }}
                  >
                    Các biện pháp chẩn đoán bệnh Bệnh lao phổi
                  </span>
                </h2>
                <div className="overflow-hidden w-full">
                  <p>
                    Bác sĩ sẽ hỏi bệnh khai thác các triệu chứng toàn thân như
                    sốt nhẹ về chiều, đổ mồ hôi đêm, chán ăn, mệt mỏi, gầy sút
                    cân đồng thời khám phổi và khám toàn thân. Sau đó, bác sĩ có
                    thể chỉ định một số xét nghiệm:
                  </p>
                  <ul>
                    <li>
                      <p>Nhuộm soi đờm trực tiếp tìm AFB</p>
                    </li>
                    <li>
                      <p>Xét nghiệm Xpert MTB/RIF (nếu có thể)</p>
                    </li>
                    <li>
                      <p>Nuôi cấy tìm vi khuẩn lao</p>
                    </li>
                    <li>
                      <p>X-quang phổi</p>
                    </li>
                  </ul>
                  <p>
                    Chẩn đoán xác định bệnh:&nbsp;Phải có ít nhất 1 mẫu có
                    AFB(+) và hình ảnh X quang nghi lao hoặc khi có 2 mẫu đờm
                    (+)
                  </p>
                  <p>
                    Chẩn đoán và điều trị sớm có thể ngăn ngừa diễn tiến nặng
                    hơn của bệnh và tránh các tình huống trở nặng cần cấp cứu,
                    vì vậy bạn hãy gặp bác sĩ càng sớm càng tốt để tránh các
                    trường hợp <strong>bệnh lao phổi nặng</strong>.
                  </p>
                </div>
              </section>
              <div
                className="clear-both text-[#a9a1a1] text-[12px]"
                style={{
                  margin: "10px 0 20px",
                }}
              >
                Chủ đề:
                <Tag data-track-tag="Truyền nhiễm">Truyền nhiễm</Tag>
                <Tag data-track-tag="Lao phổi">Lao phổi</Tag>
                <Tag data-track-tag="Bệnh truyền nhiễm">Bệnh truyền nhiễm</Tag>
                <Tag data-track-tag="Điều trị bệnh lao phổi">
                  Điều trị bệnh lao phổi
                </Tag>
                <Tag data-track-tag="bệnh lao phổi">bệnh lao phổi</Tag>
                <Tag data-track-tag="bệnh lao">bệnh lao</Tag>
              </div>
            </div>
          </div>
          <aside className="ml-3">
            <section style={section}>
              <Title>Danh sách các bài viết liên quan</Title>
              <ul style={styleul} className="mb-0">
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline"
                    href="/tin-tuc/hoi-dap-bac-si/uong-bia-chung-ly-voi-nguoi-tung-bi-lao-phoi-co-nguy-co-nhiem-benh-khong/?link_type=related_posts"
                    title="Uống bia chung ly với người từng bị lao phổi có nguy cơ nhiễm bệnh không?"
                  >
                    Uống bia chung ly với người từng bị lao phổi có nguy cơ
                    nhiễm bệnh không?
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/news/health-news/general-health-check/early-warning-symptoms-of-pulmonary-tuberculosis/?link_type=related_posts"
                    title="Early warning symptoms of pulmonary tuberculosis"
                  >
                    Early warning symptoms of pulmonary tuberculosis
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/news/health-news/general-health-check/subarachnoid-abscess-surgery-what-you-need-to-know/?link_type=related_posts"
                    title="Subarachnoid abscess surgery: What you need to know"
                  >
                    Subarachnoid abscess surgery: What you need to know
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/pharmaceutical-information/use-medicines-safely/uses-of-rifamlife/?link_type=related_posts"
                    title="Uses of Rifamlife"
                  >
                    Uses of Rifamlife
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/pharmaceutical-information/use-medicines-safely/rifamate-uses-indications-and-precautions-when-using/?link_type=related_posts"
                    title="Rifamate: Uses, indications and precautions when using"
                  >
                    Rifamate: Uses, indications and precautions when using
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/suc-khoe-tong-quat/tu-van-bac-si/nguc-cang-dau-chua-den-ky-kinh-nguyet-co-phai-tac-dung-phu-cua-thuoc-chong-lao-khong/?link_type=related_posts"
                    title="Ngực căng đau chưa đến kỳ kinh nguyệt có phải tác dụng phụ của thuốc chống lao không?"
                  >
                    Ngực căng đau chưa đến kỳ kinh nguyệt có phải tác dụng phụ
                    của thuốc chống lao không?
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/nhi-so-sinh/tu-van-bac-si/tre-hon-1-thang-tuoi-con-tiem-vac-xin-lao-duoc-khong/?link_type=related_posts"
                    title="Trẻ hơn 1 tháng tuổi còn tiêm vắc-xin lao được không?"
                  >
                    Trẻ hơn 1 tháng tuổi còn tiêm vắc-xin lao được không?
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/news/health-news/can-women-undergoing-treatment-for-tuberculosis-continue-to-breastfeed/?link_type=related_posts"
                    title="Can women undergoing treatment for tuberculosis continue to breastfeed?"
                  >
                    Can women undergoing treatment for tuberculosis continue to
                    breastfeed?
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/news/health-news/prevention-of-peritoneal-tuberculosis/?link_type=related_posts"
                    title="Prevention of peritoneal tuberculosis"
                  >
                    Prevention of peritoneal tuberculosis
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/vac-xin/tu-van-tiem-chung/nguoi-benh-lao-tiem-vac-xin-covid-co-anh-huong-gi/?link_type=related_posts"
                    title="Người bệnh lao tiêm vắc xin Covid có ảnh hưởng gì?"
                  >
                    Người bệnh lao tiêm vắc xin Covid có ảnh hưởng gì?
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/suc-khoe-tong-quat/tu-van-bac-si/thuoc-khang-lao-gay-nen-tac-dung-phu-buon-non-dung-khong/?link_type=related_posts"
                    title="Thuốc kháng lao gây nên tác dụng phụ buồn nôn đúng không?"
                  >
                    Thuốc kháng lao gây nên tác dụng phụ buồn nôn đúng không?
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/vac-xin/tu-van-tiem-chung/khi-tiem-vac-xin-lao-thuoc-bi-thoat-ra-ngoai-lieu-co-anh-huong-den-viec-phong-benh-cua-be-khong/?link_type=related_posts"
                    title="Khi tiêm vắc-xin lao thuốc bị thoát ra ngoài liệu có ảnh hưởng đến việc phòng bệnh của bé không?"
                  >
                    Khi tiêm vắc-xin lao thuốc bị thoát ra ngoài liệu có ảnh
                    hưởng đến việc phòng bệnh của bé không?
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/bai-viet/cang-thang-co-anh-huong-den-benh-lao-khong/?link_type=related_posts"
                    title="Căng thẳng có ảnh hưởng đến bệnh lao không?"
                  >
                    Căng thẳng có ảnh hưởng đến bệnh lao không?
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/news/health-news/general-health-check/epidural-abscess-surgery-what-you-need-to-know/?link_type=related_posts"
                    title="Epidural abscess surgery: What you need to know"
                  >
                    Epidural abscess surgery: What you need to know
                  </a>
                </li>
                <li style={styleli}>
                  <a
                    className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                    href="/thong-tin-duoc/su-dung-thuoc-toan/cong-dung-thuoc-rifamlife/?link_type=related_posts"
                    title="Công dụng thuốc Rifamlife"
                  >
                    Công dụng thuốc Rifamlife
                  </a>
                </li>
              </ul>
            </section>
            <section style={section}>
              <Title>Các bác sĩ có chuyên khoa liên quan</Title>
              <ul style={styleul}>
                <li style={styleli} className="flex items-center">
                  <div
                    className="h-[55px] mr-4 overflow-hidden w-14 rounded-full"
                    style={{
                      background:
                        'url("https://vinmec-prod.s3.amazonaws.com/images/23_08_2022_15_34_57_922518.jpeg") no-repeat 50% 50%/cover',
                    }}
                    title="Bác sĩ Cấn Thị Hằng"
                  ></div>
                  <div className="body">
                    <h4>
                      <a
                        className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                        href="/danh-sach/bac-si/can-thi-hang-51620/ho-hap"
                        title="Bác sĩ Cấn Thị Hằng"
                      >
                        Bác sĩ
                        <br />
                        Cấn Thị Hằng
                      </a>
                    </h4>
                  </div>
                </li>
                <li style={styleli} className="flex items-center">
                  <div
                    className="h-[55px] mr-4 overflow-hidden w-14 rounded-full"
                    style={{
                      background:
                        'url("https://vinmec-prod.s3.amazonaws.com/images/26_11_2021_03_04_33_130702.jpeg") no-repeat 50% 50%/cover',
                    }}
                    title="Bác sĩ Thành Ngọc Tiến"
                  ></div>
                  <div className="body">
                    <h4>
                      <a
                        className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                        href="/danh-sach/bac-si/thanh-ngoc-tien-51539/ho-hap"
                        title="Bác sĩ Thành Ngọc Tiến"
                      >
                        Bác sĩ
                        <br />
                        Thành Ngọc Tiến
                      </a>
                    </h4>
                  </div>
                </li>
                <li style={styleli} className="flex items-center">
                  <div
                    className="h-[55px] mr-4 overflow-hidden w-14 rounded-full"
                    style={{
                      background:
                        'url("https://vinmec-prod.s3.amazonaws.com/images/24_09_2019_16_17_17_975996.jpeg") no-repeat 50% 50%/cover',
                    }}
                    title="Bác sĩ Nguyễn Ngọc Bách"
                  ></div>
                  <div className="body">
                    <h4>
                      <a
                        className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                        href="/danh-sach/bac-si/nguyen-ngoc-bach-51134/ho-hap"
                        title="Bác sĩ Nguyễn Ngọc Bách"
                      >
                        Bác sĩ
                        <br />
                        Nguyễn Ngọc Bách
                      </a>
                    </h4>
                  </div>
                </li>
                <li style={styleli} className="flex items-center">
                  <div
                    className="h-[55px] mr-4 overflow-hidden w-14 rounded-full"
                    style={{
                      background:
                        'url("https://vinmec-prod.s3.amazonaws.com/images/24_07_2022_15_04_48_037919.jpeg") no-repeat 50% 50%/cover',
                    }}
                    title="Bác sĩ Trần Thị Diễm Trang"
                  ></div>
                  <div className="body">
                    <h4>
                      <a
                        className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                        href="/danh-sach/bac-si/tran-thi-diem-trang-50893/ho-hap"
                        title="Bác sĩ Trần Thị Diễm Trang"
                      >
                        Bác sĩ
                        <br />
                        Trần Thị Diễm Trang
                      </a>
                    </h4>
                  </div>
                </li>
              </ul>
              <a
                href="/vi/danh-sach/bac-si/?specialities=ho-hap"
                className="clear-both pt-[10px] pb-[10px] whitespace-nowrap flex items-center justify-center hover:text-blue-500 hover:underline "
              >
                Xem tất cả các bác sĩ
                <i className="ml-2 fa-solid fa-arrow-right"></i>
              </a>
            </section>
            <section style={section}>
              <Title>Các cơ sở có chuyên khoa liên quan</Title>
              <ul className="float-left list-none m-0 p-0 w-full">
                <li
                  className="min-h-[75px] overflow-hidden relative"
                  style={{
                    padding: "10px 0 10px 70px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div
                    className="h-[55px] mr-4 left-0 overflow-hidden absolute top-[10px] w-14"
                    style={{
                      background:
                        'url("https://vinmec-prod.s3.amazonaws.com/images/14_10_2019_08_36_34_976303.jpeg") no-repeat 50% 50%/cover',
                      borderRadius: "5px",
                    }}
                    title="Đơn nguyên Hô hấp - Dị ứng Miễn dịch lâm sàng - Bệnh viện Đa khoa Quốc tế Vinmec Times City"
                  ></div>
                  <div className="body">
                    <h4>
                      <a
                        className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                        href="/don-nguyen-ho-hap-di-ung-mien-dich-lam-sang-benh-vien-da-khoa-quoc-te-vinmec-times-city-98669/hen-di-ung-mien-dich"
                        title="Đơn nguyên Hô hấp - Dị ứng Miễn dịch lâm sàng - Bệnh viện Đa khoa Quốc tế Vinmec Times City"
                      >
                        Đơn nguyên Hô hấp - Dị ứng Miễn dịch lâm sàng - Bệnh
                        viện Đa khoa Quốc tế Vinmec Times City
                      </a>
                    </h4>
                  </div>
                </li>
                <li
                  className="min-h-[75px] overflow-hidden relative"
                  style={{
                    padding: "10px 0 10px 70px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div
                    className="h-[55px] mr-4 left-0 overflow-hidden absolute top-[10px] w-14"
                    style={{
                      background:
                        'url("https://vinmec-prod.s3.amazonaws.com/images/04_07_2019_11_11_07_232452.mpo") no-repeat 50% 50%/cover',
                      borderRadius: "5px",
                    }}
                    title="Khoa Khám bệnh & Nội khoa - Bệnh viện Đa khoa Quốc tế Vinmec Đà Nẵng"
                  ></div>
                  <div className="body">
                    <h4>
                      <a
                        className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                        href="/khoa-kham-benh--noi-khoa-benh-vien-da-khoa-quoc-te-vinmec-da-nang-98617/than-kinh"
                        title="Khoa Khám bệnh & Nội khoa - Bệnh viện Đa khoa Quốc tế Vinmec Đà Nẵng"
                      >
                        Khoa Khám bệnh &amp; Nội khoa - Bệnh viện Đa khoa Quốc
                        tế Vinmec Đà Nẵng
                      </a>
                    </h4>
                  </div>
                </li>
                <li
                  className="min-h-[75px] overflow-hidden relative"
                  style={{
                    padding: "10px 0 10px 70px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div
                    className="h-[55px] mr-4 left-0 overflow-hidden absolute top-[10px] w-14"
                    style={{
                      background:
                        'url("https://vinmec-prod.s3.amazonaws.com/images/04_07_2019_11_11_07_232452.mpo") no-repeat 50% 50%/cover',
                      borderRadius: "5px",
                    }}
                    title="Khoa Khám bệnh & Nội khoa - Bệnh viện Đa khoa Quốc tế Vinmec Phú Quốc"
                  ></div>

                  <div className="body">
                    <h4>
                      <a
                        className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                        href="/khoa-kham-benh--noi-khoa-benh-vien-da-khoa-quoc-te-vinmec-phu-quoc-98638/co-xuong-khop"
                        title="Khoa Khám bệnh & Nội khoa - Bệnh viện Đa khoa Quốc tế Vinmec Phú Quốc"
                      >
                        Khoa Khám bệnh &amp; Nội khoa - Bệnh viện Đa khoa Quốc
                        tế Vinmec Phú Quốc
                      </a>
                    </h4>
                  </div>
                </li>
                <li
                  className="min-h-[75px] overflow-hidden relative"
                  style={{
                    padding: "10px 0 10px 70px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div
                    className="h-[55px] mr-4 left-0 overflow-hidden absolute top-[10px] w-14"
                    style={{
                      background:
                        'url("https://vinmec-prod.s3.amazonaws.com/images/18_01_2019_11_55_23_174913.jpeg") no-repeat 50% 50%/cover',
                      borderRadius: "5px",
                    }}
                    title="Khoa khám bệnh & Nội khoa - Bệnh viện Đa khoa Quốc tế Vinmec Hạ Long"
                  ></div>

                  <div className="body">
                    <h4>
                      <a
                        className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                        href="/khoa-kham-benh--noi-khoa-benh-vien-da-khoa-quoc-te-vinmec-ha-long-98623/noi-co-xuong-khop"
                        title="Khoa khám bệnh & Nội khoa - Bệnh viện Đa khoa Quốc tế Vinmec Hạ Long"
                      >
                        Khoa khám bệnh &amp; Nội khoa - Bệnh viện Đa khoa Quốc
                        tế Vinmec Hạ Long
                      </a>
                    </h4>
                  </div>
                </li>
                <li
                  className="min-h-[75px] overflow-hidden relative"
                  style={{
                    padding: "10px 0 10px 70px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div
                    className="h-[55px] mr-4 left-0 overflow-hidden absolute top-[10px] w-14"
                    style={{
                      background:
                        'url("https://vinmec-prod.s3.amazonaws.com/images/27_03_2019_03_27_58_968675.jpeg") no-repeat 50% 50%/cover',
                      borderRadius: "5px",
                    }}
                    title="Khoa Khám bệnh & Nội khoa - Bệnh viện Đa khoa Quốc tế Vinmec Nha Trang"
                  ></div>
                  <div className="body">
                    <h4>
                      <a
                        className="no-underline text-[#000] hover:text-blue-500 hover:underline "
                        href="/khoa-kham-benh--noi-khoa-benh-vien-da-khoa-quoc-te-vinmec-nha-trang-98625/co-xuong-khop"
                        title="Khoa Khám bệnh & Nội khoa - Bệnh viện Đa khoa Quốc tế Vinmec Nha Trang"
                      >
                        Khoa Khám bệnh &amp; Nội khoa - Bệnh viện Đa khoa Quốc
                        tế Vinmec Nha Trang
                      </a>
                    </h4>
                  </div>
                </li>
              </ul>
              <a
                href="/vi/danh-sach/?specialities=ho-hap"
                className="clear-both pt-[10px] pb-[10px] whitespace-nowrap flex items-center justify-center hover:text-blue-500 hover:underline "
              >
                Xem tất cả cơ sở y tế
                <i className="ml-2 fa-solid fa-arrow-right"></i>
              </a>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export const Title = styled.div`
  border-bottom: 1px solid #eee;
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  padding: 11px 0 9px;
  width: 100%;
`;

export const Tag = styled.div`
  background: #f2f2f2;
  border-radius: 20px;
  color: #4a4a4a;
  display: inline-block;
  margin: 5px 2px 0 0;
  padding: 5px 12px 6px;
  text-decoration: none;
`;

export default ChiTietBenh;
