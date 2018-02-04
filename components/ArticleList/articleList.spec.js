/**
 * Created by patrick conroy on 2/4/18.
 */
import  Enzyme, { shallow } from 'enzyme'
import React, { Component } from 'react'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import {ArticleListItem, ArticleList} from './ArticleList'
//import ArticleListItem from './ArticleList'
describe('Article List Item', () => {
    it('ArticleListItem not undefined', () => {

        expect(typeof(ArticleListItem)).not.toBe('undefined')
    })
    it('ArticleListItem prints title text in H3 element', () => {
        const articleListItem = shallow(<ArticleListItem article={{title:"Hello World!"}} />)
        expect(articleListItem.find('h3').text()).toEqual('Hello World!')
    })
})

describe('ArticleList', () => {
    it('ArticleList contains a ul element', () => {
        const articleList = shallow(<ArticleList articles={[{title:"why testing is boring"},{title:"Hello World!"}]} />)
        expect(articleList.find('ul').length).toEqual(1);
    })
    it(' prints expected title text in H3 element', () => {
        const articleList = shallow(<ArticleList articles={[{title:"why testing is boring"},{title:"Hello World!"}]} />)
        expect(articleList.find('ul').text().includes('why testing is boring'))
        expect(articleList.find('ul').text().includes('why testing is fun')).not.toEqual(true);
    })
})
/*
describe('With Snapshot Testing', () => {
    it('App shows "Hello world!"', () => {
        const component = renderer.create(<App />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})*/