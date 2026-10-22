import { IContactItems } from "../../../types/types";

// contact items text
const contactDirectlyText = (
  <>
    admin@admin.admin
    <br />
    0999 999 999
  </>
);

const headQuaterText = (
  <>Nam Từ Liêm, Hà Nội</>
);

const workWithUsText = (
  <>
    Gửi CV của bạn đến email:
    <br />
    admin@admin.admin
  </>
);

const customerServiceText = (
  <>
    admin@admin.admin
    <br />
    0999 999 999
  </>
);

const mediaRelationsText = (
  <>
    admin@admin.admin
    <br />
    0999 999 999
  </>
);

const vendorSupportText = (
  <>
    admin@admin.admin
    <br />
    0999 999 999
  </>
);

// contact items data
export const ContactItemsData: IContactItems[] = [
  {
    id: 1,
    title: "Liên hệ trực tiếp",
    content: contactDirectlyText,
  },
  {
    id: 2,
    title: "Chi nhánh chính",
    content: headQuaterText,
  },
  {
    id: 3,
    title: "Cộng tác với chúng tôi",
    content: workWithUsText,
  },
  {
    id: 4,
    title: "Dịch vụ khách hàng",
    content: customerServiceText,
  },
  {
    id: 5,
    title: "Quan hệ truyền thông",
    content: mediaRelationsText,
  },
  {
    id: 6,
    title: "Hỗ trợ đối tác",
    content: vendorSupportText,
  },
];
