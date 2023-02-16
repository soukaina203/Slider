

import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props)
    this.img = ['2.jpg','1.jpg',  '3.jpg','4.jpg'];
   
    this.i = 0
    this.state = { attr: this.i }
  }
  right = () => {
    if (this.i === this.img.length - 1) {
      this.i = 0
      this.setState({ attr: this.i })
    } else {
      this.setState({ attr: this.i })
      this.i++
    }
  }
  left = () => {
    if (this.i === 0) {
      this.i = this.img.length - 1
      this.setState({ attr: this.i })
    } else {
      this.setState({ attr: this.i })
      this.i--
    }
  }
  render() {
    return (
      <div className='grid place-items-center
  bg-gray-300
      w-[100%] h-[100vh]
   
      '>
        <h1 className='relative text-darkBlue top-2 md:top-[-3rem] text-3xl font-bold'>Magic From Nature</h1>

        <div className='w-[100%] h-[59rem] md:h-[30rem]  mt-[-12rem] grid place-items-center   bg-gray-300'>
          <img src={this.img[this.i]} alt="" className='w-[26rem] h-[28rem] mt-[9rem] lg:w-[45rem]
          md:mt-[1rem]
          md:h-[28rem]  md:w-[38rem]'/>
          <button  onClick={this.right} className='hidden md:block md:text-[3rem] absolute desktop:right-[12.8rem] lg:right-[1rem] top-[16rem] md:right-[2rem]'> &gt; </button>
          <button   onClick={this.left} className='hidden md:block md:text-[3rem] absolute desktop:left-[12.8rem] lg:left-[1rem] top-[16rem] md:left-[2rem]'> &lt; </button>
<div className='md:hidden grid  w-40 gap-2 h-16 mt-[-13rem]  '>
          <button  onClick={this.right} className='md:hidden  p-4 bg-darkBlue  '> Previous </button>
          <button   onClick={this.left} className='md:hidden   p-4 bg-darkBlue '> Next </button>

</div>
        </div>
      </div>
    );
  }
};
export default Slider;