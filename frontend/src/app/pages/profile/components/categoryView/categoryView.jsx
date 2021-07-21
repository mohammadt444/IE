import React from "react";
import "./categoryView.css";

function CategoryView() {
  return (
    <div className="categoryView_container">
      <table className="categoryView">
        <tr>
          <th>نام دسته بندی</th>
          <th>عملیات</th>
        </tr>
        <tr>
          <td>SHOP102030</td>
          <td>
            <button className="categoryView-button">ویرایش دسته بندی</button>
            <button className="categoryView-button">حذف دسته بندی</button>
          </td>
        </tr>
        <tr>
          <td>SHOP102030</td>
          <td>
            <button className="categoryView-button">ویرایش دسته بندی</button>
            <button className="categoryView-button">حذف دسته بندی</button>
          </td>
        </tr>
        <tr>
          <td>SHOP102030</td>
          <td>
            <button className="categoryView-button">ویرایش دسته بندی</button>
            <button className="categoryView-button">حذف دسته بندی</button>
          </td>
        </tr>
        <tr>
          <td>SHOP102030</td>
          <td>
            <button className="categoryView-button">ویرایش دسته بندی</button>
            <button className="categoryView-button">حذف دسته بندی</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default CategoryView;
