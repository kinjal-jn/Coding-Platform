import { problems } from '@/mockproblems/problems';
import Link from 'next/link';
import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { FaYoutube } from "react-icons/fa";

type ProblemsTableProps = {};

const ProblemsTable:React.FC<ProblemsTableProps> = () => {
    
    return (
        <tbody className='text-white'>
            {problems.map((doc, idx) => {
                const difficulyColor = doc.difficulty === "Easy"? "text-dark-green-s": doc.difficulty === "Medium"? "text-yellow-200": "text-dark-pink";
                return(
                    <tr className={`${idx % 2 == 1 ? 'bg-dark-layer-1': ''}`} key={doc.id}> 
                        <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                            <BsCheckCircle fontSize={"18"} width={"18"}/>                          
                        </th>
                        <td className='px-6 py-4'>
                            <Link className='hover:text-blue-600 cursor-pointer' href={`/problems/${doc.id}`}>
                                {doc.title}
                            </Link>
                        </td>
                        <td className={`px-6 py-4 ${difficulyColor}`}>
                            {doc.difficulty}
                        </td>
                        <td className={'px-6 py-4'}>
                            {doc.category}
                        </td>
                        <td className={'px-6 py-4'}>
                            {doc.videoId ? (
                                <FaYoutube
                                fontSize={"28"} className='cursor-pointer hover:text-red-600' />
                            ):(
                                <p className='text-gray-400'>Coming Soon</p>
                            )}
                        </td>
                    </tr>
                )
            })}        
        </tbody>
    );
}
export default ProblemsTable;
