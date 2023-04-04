import React, { useState } from 'react';
import Dialog, {alert, confirm, modal } from './dialog';

export default function() {
  const openModal = () => {
    const close = modal(
    <span>hello</span>
    );
};
  return (
    <div>
      <div>
        <h1>第一个例子 默认窗口</h1>
        <button onClick={openModal}>modal</button>
      </div>

      <div>
        <h1>第二个例子 外弹窗口</h1>
        <button onClick={() => alert('hello')}>alert</button>
      </div>

      <div>
        <h1>第三个例子 确认窗口</h1>
        <button onClick={() => confirm('hello', () => {
          console.log('你点击了yes');
        }, () => {
          console.log('你点击了no');
        })}>confirm
        </button>
      </div>
    </div>
  );
}