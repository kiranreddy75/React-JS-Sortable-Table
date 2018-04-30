import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {formatDate, parseDate, } from 'react-day-picker/moment';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            data:[
                {name: 'Ryen',salary: 124500, extension:189,date:'12/17/17',company:'Infinity'},
                {name: 'Atarah',salary: 114578, extension:154,date:'02/13/18',company:'Infinity'},
                {name: 'Daniel',salary: 125000, extension:156,date:'12/17/13',company:'Infinity'},
                {name: 'Ebenezer',salary: 74500, extension:159,date:'11/17/12',company:'Infinity'},
                {name: 'Evanlee',salary: 77500, extension:145,date:'10/17/14',company:'Infinity'},
                {name: 'Zemira',salary: 94500, extension:126,date:'11/17/14',company:'Infinity'},
                {name: 'Victoria',salary: 64500, extension:132,date:'11/17/13',company:'Infinity'},
                {name: 'Reuben',salary: 74800, extension:117,date:'11/17/14',company:'Infinity'},
                {name: 'Barak',salary: 54500, extension:113,date:'01/17/18',company:'Infinity'},
                {name: 'Eliphaz',salary: 89500, extension:111,date:'11/17/17',company:'Infinity'},
                {name: 'Talitha',salary: 64500, extension:110,date:'12/17/16',company:'Infinity'},
                {name: 'Andrew',salary: 98578, extension:123,date:'11/13/17',company:'Infinity'},
                {name: 'Jason',salary: 79500, extension:114,date:'12/17/16',company:'Infinity'},
                {name: 'Ezekiel',salary: 74300, extension:119,date:'03/05/15',company:'Infinity'},
                {name: 'Zebedee',salary: 65500, extension:116,date:'04/13/15',company:'Infinity'},
                {name: 'Rebecca',salary: 54500, extension:136,date:'03/19/18',company:'Infinity'},
                {name: 'Myra',salary: 90500, extension:106,date:'02/12/18',company:'Infinity'},
                {name: 'Joanna',salary: 88500, extension:126,date:'03/27/18',company:'Infinity'},
                {name: 'Bethany',salary: 75600, extension:102,date:'01/07/18',company:'Infinity'},
                {name: 'Michal',salary: 89700, extension:101,date:'01/27/18',company:'Infinity'},
                {name: 'Sapphira',salary: 99700, extension:105,date:'01/17/18',company:'Infinity'},
                {name: 'Uriah',salary: 97100, extension:132,date:'04/17/18',company:'Infinity'},
                {name: 'Esau',salary: 97500, extension:123,date:'03/17/18',company:'Infinity'},
                {name: 'Keturah',salary: 74507, extension:116,date:'02/14/18',company:'Infinity'},
                {name: 'Hannah',salary: 74560, extension:107,date:'11/17/17',company:'Infinity'},
                {name: 'Olive',salary: 74507, extension:103,date:'11/17/16',company:'Infinity'},
                {name: 'Jairus',salary: 74570, extension:100,date:'11/17/15',company:'Infinity'},
            ],
            selectedData:[],
            ascNameSorted:true,
            ascSalarySorted:true,
            ascExtensionSorted:true,
            ascStartDateSorted:true,
        };
        this.totalPage = 0;
        this.currentPage = 1;

        this.onClickNameSort = this.onClickNameSort.bind(this);
        this.onClickSalarySort = this.onClickSalarySort.bind(this);
        this.onClickExtensionSort = this.onClickExtensionSort.bind(this);
        this.onClickDateSort = this.onClickDateSort.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.selectPage = this.selectPage.bind(this);
        this.generateButton = this.generateButton.bind(this);
        this.displayTable = this.displayTable.bind(this);
        this.selectDate = this.selectDate.bind(this);
    };

    componentWillMount() {
        var len = this.state.data.length;
        this.totalPage = Math.floor(len/10)+1;
        this.displayTable();
    }

    onClickNameSort(){
        this.setState({ascNameSorted: !this.state.ascNameSorted});
        var myArray = this.state.data.slice();
        if(this.state.ascNameSorted){
            myArray.sort(function(a, b){
                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            document.getElementById('nameIcon').className = 'fa fa-arrow-up';
            document.getElementById('captionUpdated').innerText = '(Sorted by Name : ascending)';
        } else {
            myArray.sort(function(a, b){
                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                if (x > y) {return -1;}
                if (x < y) {return 1;}
                return 0;
            });
            document.getElementById('nameIcon').className = 'fa fa-arrow-down';
            document.getElementById('captionUpdated').innerText = '(Sorted by Name : descending)';
        }
        this.setState({data: myArray});
        this.displayTable();
    };

    onClickSalarySort(){
        this.setState({ascSalarySorted: !this.state.ascSalarySorted});
        var myArray = this.state.data.slice();
        if(this.state.ascSalarySorted){
            myArray.sort(function(a, b){
                return a.salary-b.salary;
            });
            document.getElementById('salaryIcon').className = 'fa fa-arrow-up';
            document.getElementById('captionUpdated').innerText = '(Sorted by Salary ($) : ascending)';
        } else {
            myArray.sort(function(a, b){
                return b.salary-a.salary;
            });
            document.getElementById('salaryIcon').className = 'fa fa-arrow-down';
            document.getElementById('captionUpdated').innerText = '(Sorted by Salary ($) : descending)';
        }
        this.setState({data: myArray});
        this.displayTable();
    };

    onClickExtensionSort(){
        this.setState({ascExtensionSorted: !this.state.ascExtensionSorted});
        var myArray = this.state.data.slice();
        if(this.state.ascExtensionSorted){
            myArray.sort(function(a, b){
                return a.extension-b.extension;
            });
            document.getElementById('extensionIcon').className = 'fa fa-arrow-up';
            document.getElementById('captionUpdated').innerText = '(Sorted by Extension : ascending)';
        } else {
            myArray.sort(function(a, b){
                return b.extension-a.extension;
            });
            document.getElementById('extensionIcon').className = 'fa fa-arrow-down';
            document.getElementById('captionUpdated').innerText = '(Sorted by Extension : descending)';
        }
        this.setState({data: myArray});
        this.displayTable();
    };

    onClickDateSort(){
        this.setState({ascStartDateSorted: !this.state.ascStartDateSorted});
        var myArray = this.state.data.slice();
        if(this.state.ascStartDateSorted){
            myArray.sort(function(a, b){
                var x = new Date(a.date);
                var y = new Date(b.date);
                return x-y;
            });
            document.getElementById('dateIcon').className = 'fa fa-arrow-up';
            document.getElementById('captionUpdated').innerText = '(Sorted by Start Date : ascending)';
        } else {
            myArray.sort(function(a, b){
                var x = new Date(a.date);
                var y = new Date(b.date);
                return y-x;
            });
            document.getElementById('dateIcon').className = 'fa fa-arrow-down';
            document.getElementById('captionUpdated').innerText = '(Sorted by Start Date : descending)';
        }
        this.setState({data: myArray});
        this.displayTable();
    };

    prevPage(){
        if (this.currentPage>1){
            this.currentPage--;
            document.getElementById('pageNumber').innerText = this.currentPage;
            this.displayTable();
        }
    }

    nextPage(){
        if (this.currentPage<this.totalPage){
            this.currentPage++;
            document.getElementById('pageNumber').innerText = this.currentPage;
            this.displayTable();
        }
    }

    selectPage(e){
        if(e.target.innerHTML !=="..."){
            this.currentPage = parseInt(e.target.innerHTML);
            document.getElementById('pageNumber').innerText = this.currentPage;
            this.displayTable();
        }
    }

    displayTable(){
        let number = this.currentPage - 1;
        var myArray = this.state.data.slice(number*10, (number + 1)*10);
        this.setState({selectedData: myArray})
    }

    generateButton(){
        let buttonGroup = [];
        for (let i = 0; i < this.totalPage; i++) {
            buttonGroup.push(<button onClick={this.selectPage} key={i}>{(i+1)}</button>)
        }
        return buttonGroup
    }

    selectDate(){

    }
    render() {
        return (
            <div id="table-cage">
                <table id="employee-table" role="grid" aria-labelledby="employee-caption" aria-readonly="true">
                    <caption id="employee-caption"><h2>Employee Table</h2><span id="captionUpdated"></span></caption>
                    <thead>
                    <tr role="row">
                        <th scope="col" role="columnheader" id="name" className="sortable" aria-sort="none"
                            data-sort="text" onClick={this.onClickNameSort}>
                            <span role="button" tabIndex="0" className="th-body">Name
                                <i className="fa fa-arrows-v" id="nameIcon"></i></span>
                        </th>
                        <th scope="col" role="columnheader" id="salary" className="sortable" aria-sort="none"
                            data-sort="money" onClick={this.onClickSalarySort}>
                            <span role="button" tabIndex="0" className="th-body">Salary ($)
                                <i className="fa fa-arrows-v" id="salaryIcon"></i></span>
                        </th>
                        <th scope="col" role="columnheader" id="extension" className="sortable" aria-sort="none"
                            onClick={this.onClickExtensionSort}>
                            <span role="button" tabIndex="0" className="th-body">Extension
                                <i className="fa fa-arrows-v" id="extensionIcon"></i></span>
                        </th>
                        <th scope="col" role="columnheader" id="start_date" className="sortable" aria-sort="none"
                            data-sort="date" onClick={this.onClickDateSort}>
                            <span role="button" tabIndex="0" className="th-body">Start Date
                                <i className="fa fa-arrows-v" id="dateIcon"></i></span>
                        </th>
                        <th scope="col" role="columnheader" id="e-company" aria-disabled="true">Company</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.data.slice((this.currentPage - 1)*10, this.currentPage*10)
                            .map((dynamicComponent, i) => <Content
                            key = {i} componentData = {dynamicComponent}/>)}
                    </tbody>
                </table>
                <div id="pagination">
                    <button onClick={this.prevPage}>Prev</button>
                    {this.generateButton()}
                    <button onClick={this.nextPage}>Next</button>
                </div>
                <div id="pagination">
                    <label id="pageLabel">Page:<strong id="pageNumber">{this.currentPage}</strong></label>
                    <label id="pageLabel">Total:<strong id="pageNumber">{this.state.data.length}</strong></label>
                </div>
            </div>
        );
    }
}
class Content extends Component {
    render() {
        return (
            <tr>
                <td role="rowheader">{this.props.componentData.name}</td>
                <td role="rowheader">{currencyFormat(this.props.componentData.salary)}</td>
                <td role="rowheader">{this.props.componentData.extension}</td>
                <td role="rowheader">
                    <DayPickerInput
                        customStyles={{
                            dateInput: {
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderTopWidth: 0,
                            }
                        }}
                        formatDate={formatDate}
                        parseDate={parseDate}
                        format={'MM/DD/YY'}
                        value={`${formatDate(new Date(this.props.componentData.date), 'MM/DD/YY')}`}
                        onDayChange={console.log(this.props.componentData)}
                    /></td>
                <td role="rowheader">{this.props.componentData.company}</td>
            </tr>
        );
    }
}
function currencyFormat(currency){
    if (currency != null) {
        const currency2 = currency.toFixed(2) ;
        const str_array = currency2.toString().split('.');
        const decimal = str_array[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        let point = '';
        if (str_array[1]) {
            if (str_array[1].length === 1) {
                point = '.' + str_array[1] + '0';
            } else {
                point = '.' + str_array[1];
            }
        } else {
            point = '.00';
        }
        return decimal + point;
    }
}
export default App;
