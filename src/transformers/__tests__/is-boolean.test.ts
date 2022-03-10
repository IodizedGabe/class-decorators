import { plainToClass } from 'class-transformer';

import { IsBoolean } from '../is-boolean';

describe('IsBoolean', () => {
    it('ignores properties that are not exposed', () => {
        class Fixture {
            property!: boolean;
        }

        const obj = plainToClass(Fixture, {});
        expect(obj).not.toHaveProperty('property');
    });
    it('populates missing required fields with undefined', () => {
        class Fixture {
            @IsBoolean({})
            property!: boolean;
        }

        const obj = plainToClass(Fixture, {});
        expect(obj).toHaveProperty('property', undefined);
    });
    it('populates null required fields with undefined', () => {
        class Fixture {
            @IsBoolean({})
            property!: boolean;
        }

        const obj = plainToClass(Fixture, {
            property: null,
        });
        expect(obj).toHaveProperty('property', undefined);
    });
    it('populates undefined required fields with undefined', () => {
        class Fixture {
            @IsBoolean({})
            property!: boolean;
        }

        const obj = plainToClass(Fixture, {
            property: undefined,
        });
        expect(obj).toHaveProperty('property', undefined);
    });
    it('populates null nullable fields with null', () => {
        class Fixture {
            @IsBoolean({
                nullable: true,
            })
            property!: boolean;
        }

        const obj = plainToClass(Fixture, {
            property: null,
        });
        expect(obj).toHaveProperty('property', null);
    });
    it('populates true required fields with true', () => {
        class Fixture {
            @IsBoolean({})
            property!: boolean;
        }

        const obj = plainToClass(Fixture, {
            property: true,
        });
        expect(obj).toHaveProperty('property', true);
    });
    it('populates truthy required fields with true', () => {
        class Fixture {
            @IsBoolean({})
            property!: boolean;
        }

        const obj = plainToClass(Fixture, {
            property: 'value',
        });
        expect(obj).toHaveProperty('property', true);
    });
    it('populates false required fields with false', () => {
        class Fixture {
            @IsBoolean({})
            property!: boolean;
        }

        const obj = plainToClass(Fixture, {
            property: false,
        });
        expect(obj).toHaveProperty('property', false);
    });
    it('populates falsey (false) required fields with false', () => {
        class Fixture {
            @IsBoolean({})
            property!: boolean;
        }

        const obj = plainToClass(Fixture, {
            property: 'false',
        });
        expect(obj).toHaveProperty('property', false);
    });
    it('populates falsey (0) required fields with false', () => {
        class Fixture {
            @IsBoolean({})
            property!: boolean;
        }

        const obj = plainToClass(Fixture, {
            property: '0',
        });
        expect(obj).toHaveProperty('property', false);
    });
});
