new Vue({
    el: '#app-frontend',
    data: {
        newProjects: [
            {
                title: 'BARIA RESIDENCE DỰ ÁN ĐẤT NỀN BÀ RỊA VŨNG TÀU',
                avatar: 'static/images/project/dat-nen-6.jpg',
                content: 'Dự án Baria Residence được quy hoạch bài bản với diện tích lớn, phát triển đa dạng các sản phẩm thuộc phân khúc đất nền, mức giá vừa túi tiền, pháp lý hoàn chỉnh Baria Residence Vũng Tàu đang là tâm điểm của thị trường bất động sản khu vực này. Sở hữu vị trí đắc địa cửa ...'
            },
            {
                title: 'DỰ ÁN ĐẤT NỀN MONACO HILL MŨI NÉ PHAN THIẾT',
                avatar: 'static/images/project/dat-nen-6.jpg',
                content: 'Monaco Hill Mũi Né mang trong mình vẽ đẹp mỹ miều của bờ biển Mũi Né xinh đẹp, được đánh giá là bờ biển thơ mộng nhất Việt Nam. Tiểu khu Monaco Hill thuộc quần thể dự án Sunny Villas thuộc Vịnh Hòn Rơm, một vịnh biển nổi tiếng của Thành phố Phan Thiết. Với vị thế 3 mặt hướng ...'
            },
            {
                title: 'DỰ ÁN DIAMOND BAY PHAN THIẾT',
                avatar: 'static/images/project/dat-nen-6.jpg',
                content: 'Diamond Bay Phan Thiết là dự án biệt thự nghỉ dưỡng 100% hướng biển với tầm nhìn không giới hạn. Biệt thự biển Diamond Bay Phan Thiet tọa lạc ngay đại lộ Võ Nguyên Giáp đắc địa, cung đường “vàng” kết nối nhanh với sân bay Phan Thiết. Đặc biệt, nhà đầu tư khi đổ tiền vào dự án biệt thự Diamond ...'
            },
            {
                title: 'DỰ ÁN PHÚ MỸ GOLD CITY BÀ RỊA VŨNG TÀU',
                avatar: 'static/images/project/dat-nen-6.jpg',
                content: 'Phú Mỹ Gold City là dự án đất nền phân lô diện tích từ 100 – 200 m2, xây dựng tự do tại Thị xã Phú Mỹ, tỉnh Bà Rịa – Vũng Tàu. Dự án Phú Mỹ Gold City với tổng diện tích lên tới 20,55 ha có 1000 nền đất ngay trung tâm giao lộ của QL51, QL56, tuyến đường cao tốc Biên Hòa ...'
            },
            {
                title: 'DỰ ÁN AN LẠC RIVERSIDE BÌNH CHÁNH',
                avatar: 'static/images/project/dat-nen-6.jpg',
                content: 'Căn hộ Đất nền Nhà phố - biệt thự Phong thủy admin\n' +
                    'An Lạc Riverside là dự án đất nền tại Mặt tiền đường Nguyễn Hữu Trí, Thị Trấn Tân Túc, Huyện Bình Chánh, dự án có quy mô 13.2 hecta với 674 lô đất nền với diện tích từ 100 – 200 m2, xây dựng tự do với Sổ đỏ từng nền do Công Ty TNHH Xây Dựng Thương Mại Phát Triển Bất Động ...'
            },
            {
                title: 'DỰ ÁN SENTOSA HỒ TRÀM BÀ RỊA VŨNG TÀU',
                avatar: 'static/images/project/dat-nen-6.jpg',
                content: 'Sentosa Hồ Tràm Bà Rịa Vũng Tàu sở hữu vị trí vị trí “thiên thời – địa lợi – nhân hòa”, cách TP.Hồ Chí Minh chỉ 90 phút lái xe. Với ý tưởng xây dựng một cộng đồng nghỉ dưỡng sang trọng bậc nhất Việt Nam, chủ đầu tư Sentosa Hồ Tràm đã gửi gắm nhiều ...'
            }
        ],
        mainMenu: [
            {
                title: 'Trang Chủ',
                active: true
            },
            {
                title: 'Giới Thiệu',
                active: false
            },
            {
                title: 'Căn Hộ',
                active: false
            },
            {
                title: 'Đất Nền',
                active: false
            },
            {
                title: 'Nhà Phố - Biệt Thự',
                active: false
            },
            {
                title: 'Phong Thuỷ',
                active: false
            },
            {
                title: 'Thiết Kế Nhà',
                active: false
            },
            {
                title: 'Tin Tức',
                active: false,
                childs: [
                    {
                        title: 'Biểu mẫu luật'
                    },
                    {
                        title: 'Quy hoạch'
                    }
                ]
            },
            {
                title: 'Tuyển Dụng',
                active: false
            }
            ,{
                title: 'Liên Hệ',
                active: false
            }
        ],
        ourPartner: [
            {
                avatar: 'static/images/partners/vin-300x108.jpg',
                title: 'Trường Đại Học Quốc Tế RMIT Việt Nam'
            },
            {
                avatar: 'static/images/partners/rmit_university_logo.svg.png',
                title: 'Bảo Hiểm Ngân Hàng TMCP Công Thương Việt Nam'
            },
            {
                avatar: 'static/images/partners/logo-vbi.png',
                title: 'Công Ty Cổ Phân Tập Đoàn VinGroup'
            },
            {
                avatar: 'static/images/partners/hello-bac-si-logo-300x120-300x120.png',
                title: 'Dịch Vụ Y Tế Và Mỹ Phẩm Chất Lượng Cao'
            },
            {
                avatar: 'static/images/partners/partner_2.png',
                title: 'French Chamber of Commercerand Industria'
            },
            {
                avatar: 'static/images/partners/partner_3.png',
                title: 'Cổng thông tin tra cứu sức khoẻ'
            }
        ],
        swiperOptions: {
            loop: true,
            navigation: {
                nextEl: '._slider_next',
                prevEl: '._slider_prev'
            }
        },
        swiperPartner: {
            loop: true,
            navigation: {
                nextEl: '._partner_slider_next',
                prevEl: '._partner_slider_prev'
            },
            autoplay: {
                delay: 3000,
            },
            crossFade: true,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // when window width is >= 760px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }
        },
        isOpenMenu: false
    }
});
