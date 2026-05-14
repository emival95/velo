import { test, expect } from '@playwright/test';

/// AAA - Arrange, Act, Assert



test('Deve consultar um pedido aprovado', async ({ page }) => {
    // Arrange
    await page.goto('http://localhost:5173/');

    // Checkpoint
    await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');


    // Act
    await page.getByRole('link', { name: 'Consultar Pedido' }).click();

    // Checkpoint
    await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

    // ACT
    

    await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-JPKR5X');
    await page.getByRole('button', { name: 'Buscar Pedido' }).click();


    // Assert

    const orderCode = page.locator('//p[text()="Pedido"]/..//p[text()="VLO-JPKR5X"]')
    

    


   await expect(orderCode).toBeVisible({timeout:10_000});
   await expect(page.getByText('APROVADO')).toBeVisible();


    
    // await expect(page.getByTestId('order-result-id')).toBeVisible({timeout:10_000});
    // await expect(page.getByTestId('order-result-id')).toContainText('VLO-JPKR5X');

    // await expect(page.getByTestId('order-result-status')).toBeVisible();
    // await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');

});