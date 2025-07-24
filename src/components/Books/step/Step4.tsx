import { css } from '@emotion/react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import {
  BaseButton,
  RHFLabeledInput,
  RHFLabeledTextarea,
  UnStylishButton,
} from '@/components/common';
import DeleteIcon from '@/components/common/Icon/DeleteIcon';

import { colors } from '@/styles/colors';
import { BookFormData } from '@/types/forms';

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
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '20px',
});

const DeleteButtonStyles = css({
  position: 'absolute',
  top: '0px',
  right: '5px',
  fontWeight: 'bold',
  color: colors.gray,
});

const Step4 = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'quotes',
  });

  const handleAddQuote = () => {
    append({
      label: `인용구`,
      name: `quote`,
      value: '',
      page: 0,
    });
  };

  const handleDeleteQuote = (index: number) => {
    remove(index);
  };

  // 인용구 갯수가 2개 이상인지 확인
  const isQuotesOverLength = fields.length > 1;

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
        {fields.map((field, index) => (
          <div key={field.id} css={QuoteContainerStyles}>
            <RHFLabeledTextarea<BookFormData>
              key={field.id}
              label={`인용구 ${index + 1}`}
              name={`quotes.${index}.value`}
              placeholder="인용구를 입력해주세요."
              size="full"
              rules={{
                required: isQuotesOverLength
                  ? '두 개 이상의 인용구를 입력할 경우, 인용구를 입력해주세요.'
                  : false,
              }}
            />
            <div css={DeleteButtonStyles}>
              <UnStylishButton onClick={() => handleDeleteQuote(index)}>
                <DeleteIcon size={16} />
              </UnStylishButton>
            </div>
            {isQuotesOverLength && (
              <RHFLabeledInput<BookFormData>
                label={`페이지`}
                name={`quotes.${index}.page`}
                type="number"
                min={1}
                placeholder="인용구가 있는 페이지를 입력해주세요."
                size="full"
                rules={{
                  pattern: {
                    value: /^[0-9]+$/,
                    message: '숫자만 입력해주세요.',
                  },
                  validate: (value, formData) => {
                    console.log('validation 실행:', { value, isQuotesOverLength });

                    if (!isQuotesOverLength) {
                      return true;
                    }
                    if (value === '' || value === 0 || value === '0') {
                      return '페이지를 입력해주세요.';
                    }
                    if (value > Number(formData.pageCount)) {
                      return '인용구는 책의 페이지 범위를 초과할 수 없습니다.';
                    }
                    return true;
                  },
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step4;
