import { plainToClass } from 'class-transformer';

import { IsNested } from '../is-nested';

describe('IsNested', () => {
    class Child {
    }

    it('ignores properties that are not exposed', () => {
        class Fixture {
            property!: Child;
        }

        const obj = plainToClass(Fixture, {});
        expect(obj).not.toHaveProperty('property');
    });
    it('populates missing required fields with undefined', () => {
        class Fixture {
            @IsNested({
                type: Child,
            })
            property!: Child;
        }

        const obj = plainToClass(Fixture, {});
        expect(obj).toHaveProperty('property', undefined);
    });
    it('populates null optional fields with undefined', () => {
        class Fixture {
            @IsNested({
                type: Child,
                optional: true,
            })
            property!: Child;
        }

        const obj = plainToClass(Fixture, {
            property: null,
        });
        expect(obj).toHaveProperty('property', undefined);
    });
    it('populates undefined required fields with undefined', () => {
        class Fixture {
            @IsNested({
                type: Child,
            })
            property!: Child;
        }

        const obj = plainToClass(Fixture, {
            property: undefined,
        });
        expect(obj).toHaveProperty('property', undefined);
    });
    it('populates null nullable fields with null', () => {
        class Fixture {
            @IsNested({
                nullable: true,
                type: Child,
            })
            property!: Child;
        }

        const obj = plainToClass(Fixture, {
            property: null,
        });
        expect(obj).toHaveProperty('property', null);
    });
    it('populates required fields with value', () => {
        class Fixture {
            @IsNested({
                type: Child,
            })
            property!: Child;
        }

        const obj = plainToClass(Fixture, {
            property: {},
        });
        expect(obj).toHaveProperty('property', {});
    });
});
