import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryDinosaur from './SubCategoryDinosaur';
import SubCategoryTeddy from './SubCategoryTeddy';
import SubCategoryUnicorn from './SubCategoryUnicorn';

const SubCategory = () => {
    const [categories, setCategories] = useState([]);
    const [teddys, setTeddy] = useState([]);
    const [dinosaurs, setDinosaurs] = useState([]);
    const [unicorns, setUnicorns] = useState([]);

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    
    useEffect(() => {

        const selectedTeddy = categories.filter(category => category.title === 'Teddy');
        const selectedDinosaur = categories.filter(category => category.title === 'Dinosaur');
        const selectedUnicorns = categories.filter(category => category.title === 'Unicorn');
        setTeddy(selectedTeddy);
        setDinosaurs(selectedDinosaur);
        setUnicorns(selectedUnicorns);

    },[categories])

    return (
        <div  className="max-w-7xl mx-auto mt-20" data-aos="zoom-in-up">
            <h2 className='text-4xl text-center font-bold mb-10'>Categ<span className='text-orange-500'>ories</span></h2>
            <Tabs>
                <TabList>
                    <Tab>Teddy Bear</Tab>
                    <Tab>Dinosaur</Tab>
                    <Tab>Unicorn</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex flex-col md:flex-row gap-4'>
                        {
                            teddys.map(teddy => <SubCategoryTeddy
                                key={teddy.id}
                                teddy={teddy}
                            ></SubCategoryTeddy>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex flex-col md:flex-row gap-4'>
                        {
                            dinosaurs.map(dinosaur => <SubCategoryDinosaur
                                key={dinosaur.id}
                                dinosaur={dinosaur}
                            ></SubCategoryDinosaur>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    {
                        <div className='flex flex-col md:flex-row gap-4'>
                            {
                                unicorns.map(unicorn => <SubCategoryUnicorn
                                    key={unicorn.id}
                                    unicorn={unicorn}
                                ></SubCategoryUnicorn>)
                            }
                        </div>
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategory;