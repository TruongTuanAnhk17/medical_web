import { Input } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
const { Search } = Input;

const Home = () => {
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

            <h1 className="m-o text-2xl">Danh sách bệnh</h1>
          </div>
        </div>
      </div>
      <div className="relative m-auto w-4/5">
        <Search
          placeholder="Tìm kiếm"
          size="large"
          enterButton
          className="w-1/3 mt-4"
        />
      </div>
      <div className="relative m-auto w-4/5">
        <div id="disease-list">
          <div className="mt-5 ml-0 pl-0">
            <Section>
              <Title>Tra theo bảng chữ cái</Title>
              <ul className="list-none flex">
                <LiChuCai>
                  <a href="#a" className="hover_chucai active text-[#333]">
                    a
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#b" className="hover_chucai text-[#333]">
                    b
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#c" className="hover_chucai text-[#333]">
                    c
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#d" className="hover_chucai text-[#333]">
                    d
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#đ" className="hover_chucai text-[#333]">
                    đ
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#e" className="hover_chucai text-[#333]">
                    e
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#f" className="hover_chucai text-[#333]">
                    f
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#g" className="hover_chucai text-[#333]">
                    g
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#h" className="hover_chucai text-[#333]">
                    h
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#i" className="hover_chucai text-[#333]">
                    i
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#j" className="hover_chucai text-[#333]">
                    j
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#k" className="hover_chucai text-[#333]">
                    k
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#l" className="hover_chucai text-[#333]">
                    l
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#m" className="hover_chucai text-[#333]">
                    m
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#n" className="hover_chucai text-[#333]">
                    n
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#o" className="hover_chucai text-[#333]">
                    o
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#p" className="hover_chucai text-[#333]">
                    p
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#q" className="hover_chucai text-[#333]">
                    q
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#r" className="hover_chucai text-[#333]">
                    r
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#s" className="hover_chucai text-[#333]">
                    s
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#t" className="hover_chucai text-[#333]">
                    t
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#u" className="hover_chucai text-[#333]">
                    u
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#v" className="hover_chucai text-[#333]">
                    v
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#w" className="hover_chucai text-[#333]">
                    w
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#x" className="hover_chucai text-[#333]">
                    x
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#y" className="hover_chucai text-[#333]">
                    y
                  </a>
                </LiChuCai>
                <LiChuCai>
                  <a href="#z" className="hover_chucai text-[#333]">
                    z
                  </a>
                </LiChuCai>
              </ul>
            </Section>

            <Section>
              <Title>Bệnh được tìm nhiều nhất</Title>
              <UL>
                <LI className=" w-1/3">
                  <Link
                    to="/chitiet"
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                  >
                    Rối loạn tiền đình
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Bệnh lao phổi
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Tê bì tay chân
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Viêm đại tràng
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Giời leo
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Uốn ván
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Áp xe
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Viêm xoang
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Sốt rét
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Suy thận
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Virus Ebola
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Chốc mép
                  </Link>
                </LI>
              </UL>
            </Section>

            <Section id="a">
              <Title>A</Title>
              <UL>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Áp xe
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Áp xe vú
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Áp xe hậu môn
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Áp xe phổi
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Alzheimer
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Ám ảnh sợ hãi
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    AIDS
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Addison (suy tuyến thượng thận nguyên phát)
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Amip ăn não
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Áp xe gan do amip
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Áp xe não
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Áp xe thận
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Ấu dâm
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Alkapton niệu
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Ấu trùng sán lợn
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Áp xe gan
                  </Link>
                </LI>
                <LI>
                  <Link
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    to="/chitiet"
                  >
                    Áp xe não do amip
                  </Link>
                </LI>
              </UL>
              <span className="cursor-pointer text-xs absolute right-5 top-6">
                <a href="#main" className="active text-[#999]">
                  Trở về đầu trang
                  <i
                    className="fa fa-arrow-circle-up text-[#0876bf] ml-[7px]"
                    aria-hidden="true"
                  />
                </a>
              </span>
            </Section>
            <Section id="b">
              <Title className="text-lg leading-5 mb-5 relative">B</Title>
              <UL>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-lao-phoi-3183/"
                  >
                    Bệnh lao phổi
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/bach-hau-4743/"
                  >
                    Bạch hầu
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-lang-ben-3152/"
                  >
                    Bệnh lang ben
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/basedow-3241/"
                  >
                    Basedow
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/buou-co-3182/"
                  >
                    Bướu cổ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/bong-de-3324/"
                  >
                    Bóng đè
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/bach-bien-3126/"
                  >
                    Bạch biến
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-lao-xuong-3137/"
                  >
                    Bệnh lao xương
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-ly-3160/"
                  >
                    Bệnh lỵ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/bach-tang-3154/"
                  >
                    Bạch tạng
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/bach-cau-cap-2976/"
                  >
                    Bạch cầu cấp
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-ta-3149/"
                  >
                    Bệnh tả
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-vay-nen-3093/"
                  >
                    Bệnh vảy nến
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/bai-liet-3109/"
                  >
                    Bại liệt
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/bang-quang-tang-hoat-3314/"
                  >
                    Bàng quang tăng hoạt
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/bach-hau-thanh-quan-4726/"
                  >
                    Bạch hầu thanh quản
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-xo-cung-bi-toan-the-4459/"
                  >
                    Bệnh xơ cứng bì toàn thể
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/barrett-thuc-quan-3156/"
                  >
                    Barrett thực quản
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-loan-duong-co-duchenne-3295/"
                  >
                    Bệnh loạn dưỡng cơ Duchenne
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/bong-4782/"
                  >
                    Bỏng
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/beriberi-4701/"
                  >
                    Beriberi
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/bach-san-3346/"
                  >
                    Bạch sản
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-sa-sut-tri-tue-dementia-3294/"
                  >
                    Bệnh sa sút trí tuệ (Dementia)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-still-o-nguoi-lon-3303/"
                  >
                    Bệnh Still ở người lớn
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-quai-bi-2972/"
                  >
                    Bệnh quai bị
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-soi-2971/"
                  >
                    Bệnh sởi
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/buong-trung-da-nang-2996/"
                  >
                    Buồng trứng đa nang
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-rubella-2973/"
                  >
                    Bệnh Rubella
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-gian-tinh-mach-chi-duoi-4865/"
                  >
                    Bệnh giãn tĩnh mạch chi dưới
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/brucella-4739/"
                  >
                    Brucella
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/ban-chan-phang-4680/"
                  >
                    Bàn chân phẳng
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/bo-dien-3157/"
                  >
                    Bò điên
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/babesia-nhiem-trung-do-babesia-3337/"
                  >
                    Babesia (nhiễm trùng do Babesia)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/buong-trung-da-nang-2932/"
                  >
                    Buồng trứng đa nang
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-giac-mac-chop-3121/"
                  >
                    Bệnh giác mạc chóp
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/benh-do-cryptosporidium-4741/"
                  >
                    Bệnh do Cryptosporidium
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/bai-nao-3155/"
                  >
                    Bại não
                  </a>
                </LI>
              </UL>
              <span className="cursor-pointer text-xs absolute right-5 top-6">
                <a href="#main" className="active text-[#999]">
                  Trở về đầu trang
                  <i
                    className="fa fa-arrow-circle-up text-[#0876bf] ml-[7px]"
                    aria-hidden="true"
                  />
                </a>
              </span>
            </Section>
            <Section id="c">
              <Title>C</Title>
              <UL>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/choc-mep-3125/"
                  >
                    Chốc mép
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/cum-3162/"
                  >
                    Cúm
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/crohn-3158/"
                  >
                    Crohn
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/cang-co-qua-muc-4891/"
                  >
                    Căng cơ quá mức
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/chay-ran-chi-ran-3430/"
                  >
                    Chấy rận (chí rận)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/chan-thuong-day-chang-cheo-sau-3163/"
                  >
                    Chấn thương dây chằng chéo sau
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/cam-4711/"
                  >
                    Câm
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/choc-dau-nam-da-dau-3433/"
                  >
                    Chốc đầu (Nấm da đầu)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/con-ong-dong-mach-3024/"
                  >
                    Còn ống động mạch
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/coi-xuong-3026/"
                  >
                    Còi xương
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/chan-thuong-so-nao-3204/"
                  >
                    Chấn thương sọ não
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/can-thi-3119/"
                  >
                    Cận thị
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/chan-thuong-lach-4700/"
                  >
                    Chấn thương lách
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/cuong-lach-3240/"
                  >
                    Cường lách
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/chan-voi-4110/"
                  >
                    Chân voi
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/co-that-thuc-quan-3087/"
                  >
                    Co thắt thực quản
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/chan-thuong-day-chang-cheo-truoc-3164/"
                  >
                    Chấn thương dây chằng chéo trước
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/chua-o-vet-mo-4705/"
                  >
                    Chửa ở vết mổ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/chen-ep-day-than-kinh-then-2938/"
                  >
                    Chèn ép dây thần kinh thẹn
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/chong-mat-kich-phat-lanh-tinh-4902/"
                  >
                    Chóng mặt kịch phát lành tính
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/cuong-kinh-3012/"
                  >
                    Cường kinh
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/co-tim-phi-dai-3305/"
                  >
                    Cơ tim phì đại
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/chan-thuong-ham-mat-4694/"
                  >
                    Chấn thương hàm mặt
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/chan-an-than-kinh-bieng-an-tam-ly-3408/"
                  >
                    Chán ăn thần kinh (biếng ăn tâm lý)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/cao-huyet-ap-o-tre-em-4717/"
                  >
                    Cao huyết áp ở trẻ em
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/co-tim-4883/"
                  >
                    Cơ tim
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/cham-noi-3031/"
                  >
                    Chậm nói
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4 hover:text-blue-500"
                    href="/vi/benh/chan-thuong-sun-chem-4489/"
                  >
                    Chấn thương sụn chêm
                  </a>
                </LI>
              </UL>
              <span className="cursor-pointer text-xs absolute right-5 top-6">
                <a href="#main" className="active text-[#999]">
                  Trở về đầu trang
                  <i
                    className="fa fa-arrow-circle-up text-[#0876bf] ml-[7px]"
                    aria-hidden="true"
                  />
                </a>
              </span>
            </Section>
            <Section id="d">
              <Title>D</Title>
              <UL>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/down-3074/"
                  >
                    Down
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dich-hach-3576/"
                  >
                    Dịch hạch
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/di-ung-thoi-tiet-3127/"
                  >
                    Dị ứng thời tiết
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/di-ung-sua-3131/"
                  >
                    Dị ứng sữa
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/day-thi-som-o-nam-3261/"
                  >
                    Dậy thì sớm ở nam
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/di-ung-thuc-pham-3134/"
                  >
                    Dị ứng thực phẩm
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dai-3150/"
                  >
                    Dại
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/di-dang-mach-nao-3218/"
                  >
                    Dị dạng mạch não
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/do-amip-4876/"
                  >
                    Do amip
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/day-thi-muon-3307/"
                  >
                    Dậy thì muộn
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/day-thi-som-o-nu-3302/"
                  >
                    Dậy thì sớm ở nữ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/do-nocardia-4890/"
                  >
                    Do Nocardia
                  </a>
                </LI>
              </UL>
              <span className="cursor-pointer text-xs absolute right-5 top-6">
                <a href="#main" className="active text-[#999]">
                  Trở về đầu trang
                  <i
                    className="fa fa-arrow-circle-up text-[#0876bf] ml-[7px]"
                    aria-hidden="true"
                  />
                </a>
              </span>
            </Section>
            <Section id="đ">
              <Title>Đ</Title>
              <UL>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dau-than-kinh-toa-4498/"
                  >
                    Đau thần kinh tọa
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dong-kinh-4517/"
                  >
                    Động kinh
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dai-rat-2999/"
                  >
                    Đái rắt
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/do-mo-hoi-trom-4722/"
                  >
                    Đổ mồ hôi trộm
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dau-nua-dau-3028/"
                  >
                    Đau nửa đầu
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dau-co-vai-gay-3097/"
                  >
                    Đau cổ vai gáy
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dai-rat-3083/"
                  >
                    Đái rắt
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dau-day-than-kinh-cham-3322/"
                  >
                    Đau dây thần kinh chẩm
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dau-dau-3037/"
                  >
                    Đau đầu
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/da-hong-cau-nguyen-phat-3248/"
                  >
                    Đa hồng cầu nguyên phát
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/da-u-tuy-xuong-3214/"
                  >
                    Đa u tủy xương
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dam-nieu-protein-nieu-3252/"
                  >
                    Đạm niệu (Protein niệu)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dau-that-nguc-that-tim-4677/"
                  >
                    Đau thắt ngực (thắt tim)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dot-quy-nao-2939/"
                  >
                    Đột quỵ não
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/da-oi-2986/"
                  >
                    Đa ối
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/dau-day-than-kinh-sinh-ba-3519/"
                  >
                    Đau dây thần kinh sinh ba
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/duc-thuy-tinh-the-2944/"
                  >
                    Đục thủy tinh thể
                  </a>
                </LI>
              </UL>
              <span className="cursor-pointer text-xs absolute right-5 top-6">
                <a href="#main" className="active text-[#999]">
                  Trở về đầu trang
                  <i
                    className="fa fa-arrow-circle-up text-[#0876bf] ml-[7px]"
                    aria-hidden="true"
                  />
                </a>
              </span>
            </Section>
            <Section id="g">
              <Title>G</Title>
              <UL>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gioi-leo-3132/"
                  >
                    Giời leo
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gout-gut-3052/"
                  >
                    Gout (gút)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gian-tinh-mach-thung-tinh-2968/"
                  >
                    Giãn tĩnh mạch thừng tinh
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ghe-3129/"
                  >
                    Ghẻ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gian-nao-that-4501/"
                  >
                    Giãn não thất
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/giun-kim-3192/"
                  >
                    Giun kim
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gian-tinh-mach-chan-2941/"
                  >
                    Giãn tĩnh mạch chân
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gan-nhiem-mo-3147/"
                  >
                    Gan nhiễm mỡ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gai-cot-song-3277/"
                  >
                    Gai cột sống
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gay-xuong-3602/"
                  >
                    Gãy xương
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gian-phe-quan-2966/"
                  >
                    Giãn phế quản
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/giun-moc-3193/"
                  >
                    Giun móc
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gai-den-3044/"
                  >
                    Gai đen
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/giun-toc-3138/"
                  >
                    Giun tóc
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gian-tinh-mach-thuc-quan-4864/"
                  >
                    Giãn tĩnh mạch thực quản
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gian-ong-dan-sua-3141/"
                  >
                    Giãn ống dẫn sữa
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/giun-chi-3144/"
                  >
                    Giun chỉ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gu-cot-song-4686/"
                  >
                    Gù cột sống
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gian-mao-mach-xuat-huyet-di-truyen-4465/"
                  >
                    Giãn mao mạch xuất huyết di truyền
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/gay-xuong-mac-4681/"
                  >
                    Gãy xương mác
                  </a>
                </LI>
              </UL>
              <span className="cursor-pointer text-xs absolute right-5 top-6">
                <a href="#main" className="active text-[#999]">
                  Trở về đầu trang
                  <i
                    className="fa fa-arrow-circle-up text-[#0876bf] ml-[7px]"
                    aria-hidden="true"
                  />
                </a>
              </span>
            </Section>
            <Section id="h">
              <Title>H</Title>
              <UL>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ha-canxi-mau-3185/"
                  >
                    Hạ canxi máu
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hiv-2975/"
                  >
                    HIV
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-dau-that-lung-dau-lung-vung-thap-3168/"
                  >
                    Hội chứng đau thắt lưng (đau lưng vùng thấp)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ha-kali-mau-4880/"
                  >
                    Hạ kali máu
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-stevens-johnson-4796/"
                  >
                    Hội chứng Stevens-johnson
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-ruot-kich-thich-3045/"
                  >
                    Hội chứng ruột kích thích
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hen-phe-quan-2949/"
                  >
                    Hen phế quản
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hong-cau-luoi-liem-3825/"
                  >
                    Hồng cầu lưỡi liềm
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-sieu-nu-hoi-chung-3x-4612/"
                  >
                    Hội chứng siêu nữ (hội chứng 3X)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ho-ham-ech-3309/"
                  >
                    Hở hàm ếch
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-cushing-4793/"
                  >
                    Hội chứng Cushing
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-than-hu-o-nguoi-lon-3208/"
                  >
                    Hội chứng thận hư ở người lớn
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-patau-3036/"
                  >
                    Hội chứng Patau
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-mieng-4872/"
                  >
                    Hôi miệng
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hon-me-4716/"
                  >
                    Hôn mê
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-klinefelter-3737/"
                  >
                    Hội chứng Klinefelter
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-raynaud-3775/"
                  >
                    Hội chứng Raynaud
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hodgkin-3159/"
                  >
                    Hodgkin
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-bao-quy-dau-2928/"
                  >
                    Hẹp bao quy đầu
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hen-suyen-4684/"
                  >
                    Hen suyễn
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hong-ban-nut-3824/"
                  >
                    Hồng ban nút
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-ong-song-4473/"
                  >
                    Hẹp ống sống
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-dong-mach-canh-3648/"
                  >
                    Hẹp động mạch cảnh
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-hellp-3725/"
                  >
                    Hội chứng HELLP
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-van-hai-la-3135/"
                  >
                    Hẹp van hai lá
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-ure-huyet-tan-huyet-4786/"
                  >
                    Hội chứng urê huyết tán huyết
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-mallory-weiss-3743/"
                  >
                    Hội chứng mallory weiss
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ha-than-nhiet-o-tre-so-sinh-3250/"
                  >
                    Hạ thân nhiệt ở trẻ sơ sinh
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-xyy-4899/"
                  >
                    Hội chứng XYY
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-lyell-3742/"
                  >
                    Hội chứng Lyell
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-thuc-quan-3326/"
                  >
                    Hẹp thực quản
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoang-so-khi-ngu-hoang-so-ban-dem-4915/"
                  >
                    Hoảng sợ khi ngủ (Hoảng sợ ban đêm)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-nieu-dao-3139/"
                  >
                    Hẹp niệu đạo
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-marfan-3744/"
                  >
                    Hội chứng Marfan
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-nieu-quan-4503/"
                  >
                    Hẹp niệu quản
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-zollinger-ellison-4871/"
                  >
                    Hội chứng Zollinger-Ellison
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ho-eo-tu-cung-2980/"
                  >
                    Hở eo tử cung
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-seckel-nguoi-ti-hon-4808/"
                  >
                    Hội chứng seckel (người tí hon)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-tourette-3807/"
                  >
                    Hội chứng Tourette
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-truyen-mau-song-thai-4897/"
                  >
                    Hội chứng truyền máu song thai
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-hau-mon-o-tre-em-3236/"
                  >
                    Hẹp hậu môn ở trẻ em
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-dong-mach-phoi-4878/"
                  >
                    Hẹp động mạch phổi
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-digeorge-4795/"
                  >
                    Hội chứng DiGeorge
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-reye-4718/"
                  >
                    Hội chứng Reye
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-qt-keo-dai-3771/"
                  >
                    Hội chứng QT kéo dài
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-dau-nhuc-vung-so-mat-3312/"
                  >
                    Hội chứng đau nhức vùng sọ mặt
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-dong-mach-than-3650/"
                  >
                    Hẹp động mạch thận
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-sjogren-4810/"
                  >
                    Hội chứng Sjogren
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-gan-than-3718/"
                  >
                    Hội chứng gan thận
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hong-ban-da-dang-4873/"
                  >
                    Hồng ban đa dạng
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-prader-willi-3770/"
                  >
                    Hội chứng Prader-Willi
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-sudeck-loan-duong-giao-cam-phan-xa-4797/"
                  >
                    Hội chứng Sudeck (loạn dưỡng giao cảm phản xạ)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ha-cam-4685/"
                  >
                    Hạ cam
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-duoi-ngua-4909/"
                  >
                    Hội chứng đuôi ngựa
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-chan-khong-nghi-4734/"
                  >
                    Hội chứng chân không nghỉ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hay-quen-3646/"
                  >
                    Hay quên
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-fanconi-3709/"
                  >
                    Hội chứng Fanconi
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ha-huyet-ap-tu-the-dung-3639/"
                  >
                    Hạ huyết áp tư thế đứng
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-antiphospholipid-3202/"
                  >
                    Hội chứng antiphospholipid
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-dap-ung-viem-he-thong-4794/"
                  >
                    Hội chứng đáp ứng viêm hệ thống
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-horner-3727/"
                  >
                    Hội chứng Horner
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-khang-the-khang-phospholipid-3732/"
                  >
                    Hội chứng kháng thể kháng phospholipid
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-sheehan-4809/"
                  >
                    Hội chứng Sheehan
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-soc-nhiem-doc-4733/"
                  >
                    Hội chứng sốc nhiễm độc
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-asperger-3670/"
                  >
                    Hội chứng Asperger
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-van-dong-mach-chu-3213/"
                  >
                    Hẹp van động mạch chủ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-tiet-hormon-khang-bai-nieu-adh-khong-phu-hop-4732/"
                  >
                    Hội chứng tiết hormon kháng bài niệu (ADH) không phù hợp
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-behcet-3676/"
                  >
                    Hội chứng Behcet
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-fragile-x-3712/"
                  >
                    Hội chứng Fragile X
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-eo-dong-mach-chu-4805/"
                  >
                    Hẹp eo động mạch chủ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-thien-than-3801/"
                  >
                    Hội chứng thiên thần
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-wiskott-aldrich-4870/"
                  >
                    Hội chứng Wiskott-Aldrich
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-gilbert-3722/"
                  >
                    Hội chứng Gilbert
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-eisenmenger-4454/"
                  >
                    Hội chứng Eisenmenger
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-carcinoid-4740/"
                  >
                    Hội chứng Carcinoid
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ho-van-dong-mach-chu-3029/"
                  >
                    Hở van động mạch chủ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-tien-kinh-nguyet-4749/"
                  >
                    Hội chứng tiền kinh nguyệt
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-west-4869/"
                  >
                    Hội chứng West
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoai-tu-vo-mach-3660/"
                  >
                    Hoại tử vô mạch
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-alport-3669/"
                  >
                    Hội chứng Alport
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-budd-chiari-3680/"
                  >
                    Hội chứng Budd-Chiari
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-bartter-3674/"
                  >
                    Hội chứng Bartter
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/huyet-khoi-cuc-mau-dong-4874/"
                  >
                    Huyết khối (cục máu đông)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-ong-co-chan-3763/"
                  >
                    Hội chứng ống cổ chân
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-thanh-quan-3654/"
                  >
                    Hẹp thanh quản
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-ngu-ru-4904/"
                  >
                    Hội chứng ngủ rũ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-evans-3708/"
                  >
                    Hội chứng Evans
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-ruot-kich-thich-3004/"
                  >
                    Hội chứng ruột kích thích
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-noonan-3761/"
                  >
                    Hội chứng Noonan
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-dau-co-4901/"
                  >
                    Hội chứng đầu cổ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-goodpasture-3723/"
                  >
                    Hội chứng Goodpasture
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-volkmann-4868/"
                  >
                    Hội chứng Volkmann
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ho-ga-3143/"
                  >
                    Ho gà
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hep-duong-mat-bam-sinh-3651/"
                  >
                    Hẹp đường mật bẩm sinh
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-sau-bai-liet-4806/"
                  >
                    Hội chứng sau bại liệt
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-nghien-giat-toc-3756/"
                  >
                    Hội chứng nghiện giật tóc
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-ehlers-danlos-4910/"
                  >
                    Hội chứng ehlers-danlos
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-met-moi-4881/"
                  >
                    Hội chứng mệt mỏi
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-crouzon-4792/"
                  >
                    Hội chứng Crouzon
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-rett-4789/"
                  >
                    Hội chứng Rett
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-mittelschmerz-4913/"
                  >
                    Hội chứng Mittelschmerz
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-dumping-4908/"
                  >
                    Hội chứng Dumping
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-dressler-4867/"
                  >
                    Hội chứng Dressler
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-beckwith-wiedemann-3675/"
                  >
                    Hội chứng Beckwith-Wiedemann
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hach-nen-3642/"
                  >
                    Hạch nền
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoai-tu-chom-xuong-dui-3221/"
                  >
                    Hoại tử chỏm xương đùi
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-felty-3710/"
                  >
                    Hội chứng Felty
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-apallic-4713/"
                  >
                    Hội chứng Apallic
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ha-duong-huyet-4863/"
                  >
                    Hạ đường huyết
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-peutz-jeghers-3768/"
                  >
                    Hội chứng Peutz-Jeghers
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-catatonia-4791/"
                  >
                    Hội chứng Catatonia
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-nach-4441/"
                  >
                    Hôi nách
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/huyet-khoi-tinh-mach-sau-2964/"
                  >
                    Huyết khối tĩnh mạch sâu
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-mong-va-xuong-banh-che-3753/"
                  >
                    Hội chứng móng và xương bánh chè
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-albright-3667/"
                  >
                    Hội chứng Albright
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-quai-mu-3773/"
                  >
                    Hội chứng quai mù
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-smith-lemli-opitz-4862/"
                  >
                    Hội chứng Smith Lemli Opitz
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-hong-vu-cong-4879/"
                  >
                    Hội chứng hông vũ công
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/hoi-chung-ganser-3719/"
                  >
                    Hội chứng Ganser
                  </a>
                </LI>
              </UL>
              <span className="cursor-pointer text-xs absolute right-5 top-6">
                <a href="#main" className="active text-[#999]">
                  Trở về đầu trang
                  <i
                    className="fa fa-arrow-circle-up text-[#0876bf] ml-[7px]"
                    aria-hidden="true"
                  />
                </a>
              </span>
            </Section>
            <Section id="j">
              <Title>J</Title>
              <UL>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/jet-lag-3184/"
                  >
                    Jet lag
                  </a>
                </LI>
              </UL>
              <span className="cursor-pointer text-xs absolute right-5 top-6">
                <a href="#main" className="active text-[#999]">
                  Trở về đầu trang
                  <i
                    className="fa fa-arrow-circle-up text-[#0876bf] ml-[7px]"
                    aria-hidden="true"
                  />
                </a>
              </span>
            </Section>
            <Section id="k">
              <Title>K</Title>
              <UL>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/kho-mat-3081/"
                  >
                    Khô mắt
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/khong-dung-nap-lactose-3845/"
                  >
                    Không dung nạp Lactose
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/khi-phe-thung-3088/"
                  >
                    Khí phế thũng
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/kawasaki-viem-mach-mau-2977/"
                  >
                    Kawasaki (viêm mạch máu)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/khoeo-chan-bam-sinh-3103/"
                  >
                    Khoèo chân bẩm sinh
                  </a>
                </LI>
              </UL>
              <span className="cursor-pointer text-xs absolute right-5 top-6">
                <a href="#main" className="active text-[#999]">
                  Trở về đầu trang
                  <i
                    className="fa fa-arrow-circle-up text-[#0876bf] ml-[7px]"
                    aria-hidden="true"
                  />
                </a>
              </span>
            </Section>
            <Section id="l">
              <Title>L</Title>
              <UL>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/long-ruot-3016/"
                  >
                    Lồng ruột
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-hach-3124/"
                  >
                    Lao hạch
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/liet-duong-3316/"
                  >
                    Liệt dương
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/loang-xuong-3027/"
                  >
                    Loãng xương
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lac-noi-mac-tu-cung-2963/"
                  >
                    Lạc nội mạc tử cung
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-mang-phoi-4728/"
                  >
                    Lao màng phổi
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lyme-3911/"
                  >
                    Lyme
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/luoi-ban-do-3908/"
                  >
                    Lưỡi bản đồ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ly-amip-cap-4693/"
                  >
                    Lỵ amip cấp
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-phoi-2950/"
                  >
                    Lao phổi
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-cot-song-3140/"
                  >
                    Lao cột sống
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/leukemia-cap-3297/"
                  >
                    Leukemia cấp
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/loan-thi-3118/"
                  >
                    Loạn thị
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-ruot-3133/"
                  >
                    Lao ruột
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/liet-nua-nguoi-3878/"
                  >
                    Liệt nửa người
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lupus-ban-do-3276/"
                  >
                    Lupus ban đỏ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-mang-bung-4721/"
                  >
                    Lao màng bụng
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/liet-mat-3254/"
                  >
                    Liệt mặt
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lichen-nitidus-3874/"
                  >
                    Lichen nitidus
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/liet-day-than-kinh-so-6-3877/"
                  >
                    Liệt dây thần kinh số 6
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lac-mat-3104/"
                  >
                    Lác mắt
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/loet-thuc-quan-3899/"
                  >
                    Loét thực quản
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ly-truc-trung-ly-truc-khuan-3910/"
                  >
                    Lỵ trực trùng (lỵ trực khuẩn)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/loet-hanh-ta-trang-3293/"
                  >
                    Loét hành tá tràng
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/liet-ruot-3879/"
                  >
                    Liệt ruột
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-vu-4456/"
                  >
                    Lao vú
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lo-tieu-dong-thap-3186/"
                  >
                    Lỗ tiểu đóng thấp
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-ke-4877/"
                  >
                    Lao kê
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/loan-san-sun-xuong-4600/"
                  >
                    Loạn sản sụn xương
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/liet-co-mo-thanh-quan-4471/"
                  >
                    Liệt cơ mở thanh quản
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-da-va-mo-duoi-da-4687/"
                  >
                    Lao da và mô dưới da
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/leukemia-kinh-dong-bach-cau-hat-cml-4783/"
                  >
                    Leukemia kinh dòng bạch cầu hạt (CML)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-thanh-quan-4500/"
                  >
                    Lao thanh quản
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lichen-xo-hoa-4875/"
                  >
                    Lichen xơ hóa
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/loc-tach-dong-mach-chu-2993/"
                  >
                    Lóc tách động mạch chủ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lun-3907/"
                  >
                    Lùn
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/liet-tu-chi-3881/"
                  >
                    Liệt tứ chi
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-he-tiet-nieu-sinh-duc-4804/"
                  >
                    Lao hệ tiết niệu sinh dục
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/loet-giac-mac-3896/"
                  >
                    Loét giác mạc
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/loet-da-day-ta-trang-4535/"
                  >
                    Loét dạ dày tá tràng
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-o-mat-4729/"
                  >
                    Lao ở mắt
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lech-khop-can-3023/"
                  >
                    Lệch khớp cắn
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ly-amip-duong-ruot-man-tinh-4703/"
                  >
                    Lỵ amíp đường ruột mạn tính
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lau-3009/"
                  >
                    Lậu
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/loan-san-co-tu-cung-4884/"
                  >
                    Loạn sản cổ tử cung
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/loan-duong-mo-4893/"
                  >
                    Loạn dưỡng mỡ
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-co-xuong-4892/"
                  >
                    Lao cơ xương
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-ruot-phuc-mac-va-mac-treo-cac-tuyen-lao-bung-3868/"
                  >
                    Lao ruột, phúc mạc và mạc treo các tuyến (lao bụng)
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/legionnaire-4919/"
                  >
                    Legionnaire
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/lao-he-than-kinh-4895/"
                  >
                    Lao hệ thần kinh
                  </a>
                </LI>
                <LI>
                  <a
                    className="text-[#333] inline-block text-sm pt-2 pr-4 pb-2 pl-4 relative  before:bg-blue-700 before:h-1.5 before:left-0 before:absolute before:w-1.5 before:top-4"
                    href="/vi/benh/ly-do-balantidium-4737/"
                  >
                    Lỵ do Balantidium
                  </a>
                </LI>
              </UL>
              <span className="cursor-pointer text-xs absolute right-5 top-6">
                <a href="#main" className="active text-[#999]">
                  Trở về đầu trang
                  <i
                    className="fa fa-arrow-circle-up text-[#0876bf] ml-[7px]"
                    aria-hidden="true"
                  />
                </a>
              </span>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Section = styled.div`
  margin-bottom: 0;
  padding: 20px;
  position: relative;
`;

export const Title = styled.div`
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 20px;
  position: relative;
`;

export const UL = styled.div`
  list-style: none;
  margin-bottom: 10px;
  margin-top: -7px;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
export const LI = styled.div`
  width: 33%;
`;

export const LiChuCai = styled.div`
  background: #f6f6f6;
  color: #e9e4e4;
  float: left;
  font-size: 18px;
  height: 40px;
  line-height: 40px;
  margin-bottom: 5px;
  margin-right: 3px;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  width: 35px;

  &:hover .hover_chucai {
    border-bottom: 1px solid #0876bf;
    color: #0876bf;
  }
`;

export default Home;
