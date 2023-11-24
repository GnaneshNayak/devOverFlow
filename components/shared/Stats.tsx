import { formatAndDivideNumber } from '@/lib/utils';
import { BadgeCounts } from '@/types';
import Image from 'next/image';

import React from 'react';

type Props = {
  totalQuestions: number;
  totalAnswers: number;
  badgeCount: BadgeCounts;
  reputation: number;
};

const Stats = ({
  totalAnswers,
  totalQuestions,
  badgeCount,
  reputation,
}: Props) => {
  return (
    <div className="mt-10">
      <h4 className="h3-semibold text-dark200_light900">Stats -{reputation}</h4>
      <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
        <div
          className="light-border background-light900_dark300
          flex flex-wrap items-center justify-evenly gap-4 rounded-md border
          p-6 shadow-light-300 dark:shadow-dark-200 
        "
        >
          <div className="flex flex-col">
            <p className="paragraph-semibold text-dark200_light900">
              {formatAndDivideNumber(totalQuestions)}
            </p>
            <p className="body-medium text-dark400_light700">Questions</p>
          </div>
          <div>
            <p className="paragraph-semibold text-dark200_light900">
              {formatAndDivideNumber(totalAnswers)}
            </p>
            <p className="body-medium text-dark400_light700">Answers</p>
          </div>
        </div>

        <StatsCard
          imgUrl="/assets/icons/gold-medal.svg"
          value={badgeCount.GOLD}
          title="Gold Badges"
        />

        <StatsCard
          imgUrl="/assets/icons/silver-medal.svg"
          value={badgeCount.SILVER}
          title="Silver Badges"
        />
        <StatsCard
          imgUrl="/assets/icons/bronze-medal.svg"
          value={badgeCount.BRONZE}
          title="Bronze Badges"
        />
      </div>
    </div>
  );
};

export default Stats;

interface StatsCardProp {
  imgUrl: string;
  value: number;
  title: string;
}

function StatsCard({ imgUrl, value, title }: StatsCardProp) {
  return (
    <div
      className="light-border background-light900_dark300 flex flex-wrap 
      items-center justify-evenly
    gap-4 rounded-md border p-6 shadow-light-300 dark:shadow-dark-200
    "
    >
      <Image
        src={imgUrl}
        alt={title}
        width={40}
        height={50}
        className="object-cover"
      />
      <div>
        <p className="paragraph-semibold text-dark200_light900">{value}</p>
        <p className="body-medium text-dark400_light700">{title}</p>
      </div>
    </div>
  );
}
