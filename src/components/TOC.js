import React, { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log(
      '===> TOC render shouldComponentUpdate',
      newProps.data, // 원소가 4개
      this.props.data // 원소가 3개
    );
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;

    /**
     * 1. render 이전에 shouldComponentUpdate가 실행된다.
     * 2. return이 true면 render가 호출되고, return이 false면 render는 호출되지 않도록 약속되어있다.
     * 3. shouldComponentUpdate는 새로 바뀐 값과, 이전 값에 접근할 수 있다.
     */
  }

  render() {
    console.log('TOC render');
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
            href={'/content/' + data[i].id}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
