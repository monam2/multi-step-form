import { useState } from 'react';
import { css } from '@emotion/react';

import { BaseButton, LabeledTextarea, UnStylishButton } from '@/components/common';
import DeleteIcon from '@/components/common/Icon/DeleteIcon';

import { Quote } from '@/types/forms';
import { colors } from '@/styles/colors';

const Step4Styles = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  gap: '30px',
});

const TextContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  fontSize: '14px',
  color: colors.gray,
});

const ButtonContainerStyles = css({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '20px',
});

const InputContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '20px',
});

const QuoteContainerStyles = css({
  position: 'relative',
});

const DeleteButtonStyles = css({
  position: 'absolute',
  top: '0px',
  right: '5px',
  fontWeight: 'bold',
  color: colors.gray,
});

const Step4 = () => {
  const [quotes, setQuotes] = useState<Quote[]>([
    {
      id: 0,
      label: '인용구',
      name: 'quote1',
      value: '',
    },
  ]);

  const handleAddQuote = () => {
    setQuotes([
      ...quotes,
      {
        id: quotes.length,
        label: `인용구`,
        name: `quote`,
        value: '',
      },
    ]);
  };

  const deleteQuote = (id: number) => {
    setQuotes(quotes.filter((quote) => quote.id !== id));
  };

  const handleDeleteQuote = (id: number) => {
    deleteQuote(id);
  };

  return (
    <div css={Step4Styles}>
      <h2>인용구</h2>
      <div css={TextContainerStyles}>
        <span>기억하고 싶은 인용구를 추가해주세요.</span>
      </div>
      <div css={ButtonContainerStyles}>
        <BaseButton size="small" variant="outlined" color="primary" onClick={handleAddQuote}>
          인용구 추가
        </BaseButton>
      </div>
      <div css={InputContainerStyles}>
        {/* RHF 변경 및 유효성 검증 추가 필요 */}
        {quotes.map((quote, index) => (
          <div key={quote.id} css={QuoteContainerStyles}>
            <LabeledTextarea
              key={quote.id}
              label={`${quote.label} ${index + 1}`}
              name={quote.name}
              placeholder="인용구를 입력해주세요."
              size="full"
              value={quote.value}
              onChange={(e) => {
                const newQuotes = [...quotes];
                newQuotes[quote.id].value = e.target.value;
                setQuotes(newQuotes);
              }}
            />
            <div css={DeleteButtonStyles}>
              <UnStylishButton onClick={() => handleDeleteQuote(quote.id)}>
                <DeleteIcon size={16} />
              </UnStylishButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step4;
