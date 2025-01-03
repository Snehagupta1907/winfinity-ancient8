import { Capacitor } from '@capacitor/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import { CiMedal } from 'react-icons/ci';
import clsxm from '@/lib/clsxm';
import { useQuizContext } from '../../contexts/QuizContext';

const DepositSection = () => {
  const [depositAmount, setDepositAmount] = useState(0);
  const [userBalance, setUserBalance] = useState(234);

  const {
    setDeposit,
    setStake,
    stakeYourAmount,
    stake,
    deposit,
    currentRewardPerToken
  } = useQuizContext();
  const makeUserbalance = (percentage: any) => {
    const percentageValue = (percentage / 100) * userBalance;
    setDepositAmount(percentageValue);
  };

  const handleDeposit = async () => {
    try {
      console.log('depositAmount', depositAmount);
      await stakeYourAmount(depositAmount.toString());
      setStake((prev: any) => Number(prev) + Number(depositAmount));
      setDeposit((prev: any) => Number(prev) + Number(depositAmount));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={clsx(
        Capacitor.getPlatform() === 'ios' &&
          'mt-8 pt-[calc(env(safe-area-inset-bottom))]',
        'relative flex flex-col'
      )}
    >
      <div className='text-gradient-primary  flex w-full flex-col items-center gap-1'>
        <span className='h2 block font-secondary'>Deposit Funds !</span>
        <span className='font-secondary'>You Have {deposit} USDC Deposits</span>
        <span className='font-secondary'>You Have {stake} USDC Stakes</span>
        <span className='font-secondary'>Rewards Per Token :  {currentRewardPerToken} USDC</span>
      </div>

      <div
        className={clsxm([
          'relative w-full rounded-3xl border-2 border-primary-500 p-8 pb-[75px]',
          'mt-6',
        ])}
      >
        <div className='absolute -bottom-1 left-2/4 h-2 w-8/12 -translate-x-2/4 bg-dark'></div>
        <div className='absolute -bottom-0 left-2/4 h-16 w-[calc(66.66666%+4px)] -translate-x-2/4 rounded-t-3xl border-2 border-b-0  border-primary-500'></div>
        <div className='flex flex-col justify-center'>
          <div className='mb-2 mt-4 flex gap-4'>
            <div>
              <label>Select Coin</label>
              <select
                // onChange={handleChangeLines}
                defaultValue='USDC'
                className='border-secondary placeholder:text-text focus:border-purple w-full rounded-md border-2 border-blue-400 bg-transparent px-4 py-2 font-bold text-white transition-all placeholder:font-bold focus:outline-none'
              >
                <option value='USDC'>USDC</option>
                <option value='SOL'>SOL</option>
                <option value='DEGO'>DEGO</option>
              </select>
            </div>
            <div>
              <label>Select Network</label>
              <select
                // onChange={handleChangeLines}
                defaultValue='BNB'
                className='border-secondary placeholder:text-text focus:border-purple w-full rounded-md border-2 border-blue-400 bg-transparent px-4 py-2 font-bold text-white  transition-all placeholder:font-bold focus:outline-none'
              >
                <option value='BNB'>BNB Network</option>
              </select>
            </div>
          </div>
          <label className='mb-2'>Amount</label>
          <input
            type='number'
            name='depositAmount'
            value={depositAmount}
            onChange={(e: any) => setDepositAmount(e.target.value)}
            placeholder='Enter Amount'
            className='bg-background placeholder:text-text focus:border-purple w-full rounded-md border-2 border-blue-400 bg-transparent px-8 font-bold text-white transition-colors placeholder:font-bold focus:outline-none md:p-2'
          />
          <div className='mt-3 flex space-x-2'>
            <div
              onClick={() => {
                makeUserbalance(10);
              }}
              className='flex h-8 w-12  cursor-pointer items-center justify-center rounded-md bg-sky-200 text-xs font-bold text-blue-900 hover:bg-blue-300'
            >
              10%
            </div>

            <div
              onClick={() => {
                makeUserbalance(50);
              }}
              className='flex h-8 w-12  cursor-pointer items-center justify-center rounded-md bg-sky-200 text-xs font-bold text-blue-900 hover:bg-blue-300'
            >
              50%
            </div>
            <div
              onClick={() => {
                makeUserbalance(75);
              }}
              className='flex h-8 w-12  cursor-pointer items-center justify-center rounded-md bg-sky-200 text-xs font-bold text-blue-900 hover:bg-blue-300'
            >
              75%
            </div>
            <div
              onClick={() => {
                makeUserbalance(100);
              }}
              className='flex h-8 w-12  cursor-pointer items-center justify-center rounded-md bg-sky-200 text-xs font-bold text-blue-900 hover:bg-blue-300'
            >
              100%
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-full justify-center'>
        <div className='relative -top-14 flex w-3/5 cursor-pointer items-center justify-center rounded-3xl bg-white py-5'>
          <div className='flex gap-1 text-black'>
            <span
              className={clsx([
                'h1 my-auto  flex w-full items-center justify-center break-all text-center',
                'text-sm',
              ])}
              onClick={handleDeposit}
            >
              <CiMedal size={22} />
              Deposit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositSection;
